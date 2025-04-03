# 个人主页 (中英文双语版)

这是一个简洁优雅的双语学术个人主页模板，支持中英文切换功能。采用左侧个人信息栏和中央内容区域的布局设计，适合研究人员、学者或专业人士展示个人信息、研究成果和学术成就。

## 特点

- **双语支持**: 一键切换中英文内容
- **集中式内容管理**: 通过JSON数据文件轻松修改所有内容
- 导航栏支持快速跳转到各个部分
- 左侧固定的个人信息侧边栏
- 中央区域采用统一的白色背景设计
- 使用彩色emoji图标替代传统图标，增添趣味性
- 出版物部分包含缩略图和详细信息
- 响应式设计，适配所有设备
- 极简界面设计，没有多余的视觉元素

## 使用方法

1. 克隆此仓库到您的本地
2. 修改 `data.js` 文件中的内容（无需直接编辑HTML）
3. 添加您的头像图片（命名为 `avatar.jpg`）到项目根目录
4. 为您的出版物添加缩略图（如 `paper-thumbnail.jpg`）
5. 根据需要修改 `styles.css` 中的样式

## 内容管理

所有网站内容都集中在 `data.js` 文件中管理，以JSON格式组织，分为中英文两种语言版本。要修改网站内容，只需编辑此文件即可，无需直接修改HTML文件。

### 数据结构

```javascript
const websiteData = {
    // 导航栏
    "nav": {
        "zh": { /* 中文导航项 */ },
        "en": { /* 英文导航项 */ }
    },
    
    // 个人信息
    "profile": {
        "zh": { /* 中文个人信息 */ },
        "en": { /* 英文个人信息 */ }
    },
    
    // 其他部分...
};
```

### 修改个人信息

编辑 `data.js` 中的 `profile` 部分:

```javascript
"profile": {
    "zh": {
        "name": "您的姓名",
        "title": "软件工程师 | 数据科学家",
        "email": "your.email@example.com",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "twitter": "Twitter"
    },
    "en": {
        "name": "Your Name",
        "title": "Software Engineer | Data Scientist",
        // ...英文版本内容
    }
}
```

### 添加新闻

编辑 `data.js` 中的 `news` 部分:

```javascript
"news": {
    "zh": {
        "title": "新闻动态",
        "items": [
            {
                "date": "2024.03",
                "content": "在XXX会议上发表论文"
            },
            // 添加更多中文新闻项...
        ]
    },
    "en": {
        "title": "News",
        "items": [
            {
                "date": "2024.03",
                "content": "Presented a paper at XXX Conference"
            },
            // 添加更多英文新闻项...
        ]
    }
}
```

### 添加出版物

编辑 `data.js` 中的 `publications` 部分:

```javascript
"publications": {
    "zh": {
        "title": "出版物",
        "items": [
            {
                "title": "论文标题",
                "authors": "作者列表",
                "venue": "发表期刊或会议, 年份",
                "thumbnail": "paper-thumbnail.jpg",
                "links": {
                    "pdf": "PDF",
                    "video": "Video",
                    "bibtex": "BibTeX",
                    "slides": "PPT"
                }
            },
            // 添加更多出版物...
        ]
    },
    "en": {
        // 英文版本出版物...
    }
}
```

## 语言切换功能

网站默认以中文显示，用户可以通过点击右上角的语言切换按钮在中英文之间切换。语言选择会保存在浏览器的 localStorage 中，用户下次访问时会自动加载上次选择的语言。

### 语言切换工作原理

1. `script.js` 包含语言切换逻辑
2. 所有翻译文本都存储在 `data.js` 中
3. 切换语言时，页面内容会动态更新，无需刷新页面

## 自定义样式

1. 在 `styles.css` 中修改颜色变量：
   ```css
   :root {
       --primary-color: #2c3e50;     /* 主要颜色 */
       --secondary-color: #3498db;   /* 次要颜色 */
       --text-color: #333;           /* 文字颜色 */
       --light-gray: #f5f6fa;        /* 背景色 */
       --border-color: #e1e1e1;      /* 边框颜色 */
       --accent-color: #e74c3c;      /* 强调色 */
       --header-bg: #34495e;         /* 导航栏背景色 */
       --link-color: #2980b9;        /* 链接颜色 */
       --emoji-about: #4CAF50;       /* 关于我图标颜色 */
       --emoji-news: #FF9800;        /* 新闻图标颜色 */
       --emoji-publications: #9C27B0; /* 出版物图标颜色 */
       --emoji-awards: #F44336;       /* 奖项图标颜色 */
   }
   ```

2. 调整布局和间距：
   - 修改 `.main-container` 的 `grid-template-columns` 值调整左侧栏宽度
   - 调整 `.section` 的 `padding` 和间距

### 更换emoji图标

在 `index.html` 中更换各部分的emoji图标：

```html
<span class="emoji-icon emoji-about">👨‍💻</span> <!-- 关于我图标 -->
<span class="emoji-icon emoji-news">📰</span> <!-- 新闻图标 -->
<span class="emoji-icon emoji-publications">📚</span> <!-- 出版物图标 -->
<span class="emoji-icon emoji-awards">🏆</span> <!-- 奖项图标 -->
```

## 部署

1. 将修改后的文件推送到您的 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择主分支作为部署源
4. 访问 `https://yourusername.github.io/repository-name` 查看您的个人主页

## 响应式设计

此模板完全响应式，可在不同设备上良好显示：

- 桌面设备：左侧栏固定，主内容区域在右侧
- 平板设备：左侧栏变窄
- 移动设备：左侧栏移至顶部，所有内容垂直排列

## 依赖项

- Font Awesome 图标库
- Google Fonts (Open Sans)

## 许可证

MIT License 