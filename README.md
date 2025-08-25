# 长沙理工大学云嵌战队官方网站

## 🚀 项目简介

这是长沙理工大学云嵌战队（CSUST RoboMaster战队）的官方网站项目，基于 Vue 3 + TypeScript + Element Plus 构建的现代化响应式网站。网站提供战队介绍、兵种说明、在线报名、用户管理等功能。

## ✨ 主要功能

### 🏠 前台功能
- **首页展示** - 战队风采与最新动态
- **兵种介绍** - 详细的机器人类型说明（步兵、哨兵、英雄、工程、无人机等）
- **在线报名** - 支持多组别报名，图片上传
- **关于我们** - 战队历史与发展timeline
- **用户系统** - 注册、登录、个人中心
- **多语言支持** - 中英文切换

## 🛠️ 技术栈

### 前端框架
- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 下一代前端构建工具

### UI 组件库
- **Element Plus** - 基于 Vue 3 的组件库
- **SCSS** - CSS 预处理器

### 状态管理
- **Pinia** - Vue 3 官方推荐的状态管理库
- **pinia-plugin-persistedstate** - 状态持久化插件

### 网络请求
- **Axios** - HTTP 客户端

### 其他工具
- **marked** - Markdown 解析器
- **highlight.js** - 代码高亮
- **Vue Router** - 官方路由管理器

## 📁 项目结构

```
yunqian/
├── public/
│   ├── article/              # Markdown 文章，主要存放介绍兵种的md文件
│   │   ├── introduce0.md     # 步兵机器人介绍
│   │   ├── introduce1.md     # 无人机人介绍
│   │   └── ...
│   └── assets/               # 静态资源
├── src/
│   ├── views/                # 页面组件
│   │   ├── layout/           # 布局组件
│   │   │   └── components/   # 导航、底部等
│   │   ├── home/             # 首页
│   │   ├── introduce/        # 兵种介绍
│   │   ├── join/             # 报名页面
│   │   ├── about/            # 关于我们
│   │   ├── login/            # 登录
│   │   ├── register/         # 注册
│   │   ├── my/               # 个人中心
│   │   └── administrator/    # 管理员后台
│   ├── Store/                # Pinia 状态管理
│   │   ├── user/             # 用户状态
│   │   ├── setting/          # 设置状态
│   │   └── article/          # 文章状态
│   ├── apis/                 # API 接口
│   ├── utils/                # 工具函数
│   │   └── http.ts           # HTTP 配置
│   ├── assets/               # 本地资源
│   └── router/               # 路由配置
├── package.json
└── README.md
```

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run serve
```

### 构建生产版本
```bash
npm run build
```

## 🔧 配置说明

下面是一些以后需要修改或者可能需要修改的地方

### 兵种介绍内容

这个修改的地方在 `public/article/` 下面，修改对应的md文件即可，也可以添加图片视频什么的都可以。

### 邮箱API 配置

在 `src/apis/api.ts` 中配置邮件发送Api：

```typescript
export default {
    imgApiKey: '6d207e02198a847aa98d0a2a901485a5',
    mailApiKey: ['DWSv9wXLxmoE2JdVm'],
    template_id: ['template_wiknyzq'],
    service_id: ['service_i71l0wl']
}
```

我使用了一个数组保存，因为一个邮箱Api免费的额度是一个月200封邮件，目前的打算是使用3个这样的Api，就是一个月总共600封邮件。

同样需要修改的地方是在 `src/views/join/index.vue` 

~~~
async function sendEmail() {
    try {
        // const randomIndex = getRandom012();
        const randomIndex = 0; // For testing, use a fixed index
        const response = await send(mailApi.service_id[randomIndex], mailApi.template_id[randomIndex], mailOptions.value);
        console.log('Email sent successfully:', response);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
}
~~~

这里的 **randomIndex** 参数就是根据邮件api的个数决定，有几个相应修改随机数生成函数，这个丢给ai改就足够了

### 组别配置

在 `src/Store/setting/setting.ts` 中配置报名组别邮箱，用户报名后，会自动把内容发送给对应组别的邮箱：

```typescript
groupOptions: [
    { value: '0', label: '电控组', email: '443002340@qq.com' },
    { value: '1', label: '视觉组', email: '3441613688@qq.com' },
    { value: '2', label: '机械组', email: '3441613688@qq.com' },
    { value: '3', label: '硬件组', email: '3441613688@qq.com' },
    { value: '4', label: '宣传组', email: '3441613688@qq.com' }
]
```

其他的比如图像修改对应修改图片改一下名字即可，首页的视频也是换个视频地址即可。

## 📝 核心功能详解

### 报名系统
- 支持多组别选择（电控组、视觉组、机械组、硬件组、宣传组）
- 图片上传功能（支持 JPG、PNG、GIF、WebP 格式，最大 20MB）
- 自动邮件通知到对应组别负责人
- 报名状态跟踪（待审核、已通过、已拒绝）

### 兵种介绍系统
- 动态加载 Markdown 文件
- 支持代码高亮显示
- 响应式布局适配

### 用户系统
- Token 认证
- 用户注册/登录
- 个人报名记录查看
- 头像显示（QQ 头像）

### 多语言支持
- 中英文双语切换
- 全局状态管理
- 本地存储持久化

## 📋 待办事项清单

### 🔧 管理功能优化

- **管理员邮箱配置** - 实现前端动态修改各组别邮箱地址功能，支持实时更新通知配置

### 🛡️ 安全与权限

- **Vue 路由守卫** - 完善路由拦截机制，实现用户认证、权限验证和页面访问控制

### 📱 移动端体验

- **Android 端适配** - 优化移动端界面布局，提升触控体验和响应式设计

### 🌐 国际化支持

- **多语言切换** - 完善中英文双语系统，实现更流畅的语言切换体验

## 🎨 自定义样式

项目使用 SCSS 进行样式管理，主要样式文件位于各组件的 `<style>` 标签中。

## 🤝 贡献指南

1. Fork 本仓库
2. 创建新的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 开源协议

本项目采用 MIT 协议，详情请参阅 [LICENSE](LICENSE) 文件。

## 🏆 关于云嵌战队

长沙理工大学云嵌战队是参加 RoboMaster 机甲大师赛的学生团队，致力于机器人技术的研发与创新。我们欢迎对机器人技术感兴趣的同学加入我们！

---

**We are the future of robotics.**
