# Vercel 部署指南（推荐）

## 🚀 将朝阳旅游网站部署到Vercel

### 为什么选择Vercel？
- ✅ 部署速度极快（30秒内）
- ✅ 自动HTTPS和CDN
- ✅ 支持拖拽上传
- ✅ 免费额度充足
- ✅ 自动生成分享链接

### 步骤1：访问Vercel
1. 打开 https://vercel.com
2. 点击 "Start Deploying" 或 "Sign Up"
3. 可以用GitHub、GitLab或邮箱注册

### 步骤2：创建新项目
1. 登录后点击 "New Project"
2. 选择 "Browse All Templates"
3. 选择 "Static" 模板

### 步骤3：上传文件
方法A - 拖拽上传：
1. 将整个网站文件夹拖拽到Vercel页面
2. 确保包含：
   - chaoyang-travel.html
   - images/ 文件夹
   - 所有相关文件

方法B - 从GitHub导入：
1. 先将代码上传到GitHub
2. 在Vercel中选择 "Import Git Repository"
3. 选择您的GitHub仓库

### 步骤4：配置项目
1. Project Name: `chaoyang-travel`
2. Framework Preset: 选择 "Other"
3. Root Directory: 保持默认
4. 点击 "Deploy"

### 步骤5：获取分享链接
部署完成后，Vercel会自动生成：
- 主域名：`https://chaoyang-travel.vercel.app`
- 预览链接：`https://chaoyang-travel-xxx.vercel.app`

### 优点：
✅ 部署最简单
✅ 速度最快
✅ 自动生成分享链接
✅ 支持自定义域名
✅ 自动SSL证书