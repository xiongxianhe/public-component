// component/jdzIndexToSeek/jdzIndexToSeek.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    avatars: []
  },

  lifetimes: {
    attached: function () {
      this.loadData()
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadData() {
      const urls = [
        'https://gd-hbimg.huaban.com/23ddf90ec2b2d367f865c844134b0ba04b0a226711128-OQKirF_fw240',
        'https://gd-hbimg.huaban.com/23ddf90ec2b2d367f865c844134b0ba04b0a226711128-OQKirF_fw240',
        'https://gd-hbimg.huaban.com/23ddf90ec2b2d367f865c844134b0ba04b0a226711128-OQKirF_fw240',
        'https://gd-hbimg.huaban.com/23ddf90ec2b2d367f865c844134b0ba04b0a226711128-OQKirF_fw240',
        'https://gd-hbimg.huaban.com/23ddf90ec2b2d367f865c844134b0ba04b0a226711128-OQKirF_fw240',
        'https://gd-hbimg.huaban.com/23ddf90ec2b2d367f865c844134b0ba04b0a226711128-OQKirF_fw240',
        'https://gd-hbimg.huaban.com/23ddf90ec2b2d367f865c844134b0ba04b0a226711128-OQKirF_fw240',
        'https://gd-hbimg.huaban.com/23ddf90ec2b2d367f865c844134b0ba04b0a226711128-OQKirF_fw240',
        'https://gd-hbimg.huaban.com/23ddf90ec2b2d367f865c844134b0ba04b0a226711128-OQKirF_fw240',
        'https://gd-hbimg.huaban.com/23ddf90ec2b2d367f865c844134b0ba04b0a226711128-OQKirF_fw240',
      ];

      const systemInfo = wx.getSystemInfoSync();
      const screenWidth = systemInfo.windowWidth * 2;  // rpx
      const screenHeight = systemInfo.windowHeight * 2;  // rpx

      const containerHeight = screenHeight * 0.7;
      const centerX = screenWidth / 2;
      const centerY = containerHeight / 2;

      const maxSize = 167;
      const minSize = 100;

      const minDistance = 90; // 最小中心距，避免重叠

      const maxCount = 20;
      const avatars = [];

      let attempts = 0;
      let maxAttempts = 200;

      while (avatars.length < maxCount && attempts < maxAttempts) {
        attempts++;

        const angle = Math.random() * 2 * Math.PI;
        const radius = 80 + Math.random() * 250;  // 半径从 80 到 330 rpx

        const xCenter = centerX + radius * Math.cos(angle);
        const yCenter = centerY + radius * Math.sin(angle);

        const distanceFromCenter = Math.sqrt(
          Math.pow(xCenter - centerX, 2) + Math.pow(yCenter - centerY, 2)
        );

        // 距离越远尺寸越小（线性）
        const size = maxSize - ((maxSize - minSize) * (distanceFromCenter / 330));
        const finalSize = Math.max(minSize, Math.min(maxSize, size));

        const x = xCenter - finalSize / 2;
        const y = yCenter - finalSize / 2;

        // 检查是否会超出边界
        if (
          x < 0 || x + finalSize > screenWidth ||
          y < 0 || y + finalSize > containerHeight
        ) {
          continue;
        }

        // 检查是否与其他头像太近
        let tooClose = false;
        for (let a of avatars) {
          const dx = xCenter - (a.x + a.size / 2);
          const dy = yCenter - (a.y + a.size / 2);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < (finalSize + a.size) * 0.5 * 0.9) {  // 允许最多10%重叠
            tooClose = true;
            break;
          }
        }

        if (tooClose) continue;

        avatars.push({
          url: urls[avatars.length % urls.length],
          x,
          y,
          size: finalSize
        });
      }

      this.setData({ avatars, containerHeight });

    }
  }
})