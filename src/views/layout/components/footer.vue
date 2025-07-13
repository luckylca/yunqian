<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-sections">
                <!-- 网站信息 -->
                <div class="footer-section">
                    <h4>关于我们</h4>
                    <p>CSUST Cloud 致力于为用户提供优质的云服务体验</p>
                </div>
                
                <!-- 快速链接 -->
                <div class="footer-section">
                    <h4>快速链接</h4>
                    <ul class="footer-links">
                        <li><a href="/about">关于我们</a></li>
                        <li><a href="/contact">联系我们</a></li>
                        <li><a href="/help">帮助中心</a></li>
                        <li><a href="/privacy">隐私政策</a></li>
                    </ul>
                </div>
                
                <!-- 友情链接 -->
                <div class="footer-section">
                    <h4>友情链接</h4>
                    <ul class="footer-links">
                        <li><a href="https://www.csust.edu.cn" target="_blank">长沙理工大学</a></li>
                        <li><a href="#" target="_blank">合作伙伴A</a></li>
                        <li><a href="#" target="_blank">合作伙伴B</a></li>
                        <li><a href="#" target="_blank">技术支持</a></li>
                    </ul>
                </div>
                
                <!-- 联系方式 -->
                <div class="footer-section">
                    <h4>联系我们</h4>
                    <div class="contact-info">
                        <p>邮箱: contact@csustcloud.com</p>
                        <p>电话: 400-123-4567</p>
                        <div class="social-links">
                            <a href="#" class="social-link">微信</a>
                            <a href="#" class="social-link">QQ</a>
                            <a href="#" class="social-link">微博</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>© 2025 CSUST Cloud. All rights reserved. | 备案号: 湘ICP备xxxxxxxx号</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// 可以添加友链数据管理
interface FriendLink {
    name: string;
    url: string;
    description?: string;
}

const friendLinks: FriendLink[] = [
    { name: '长沙理工大学', url: 'https://www.csust.edu.cn', description: '官方网站' },
    { name: '合作伙伴A', url: '#', description: '技术合作' },
    { name: '合作伙伴B', url: '#', description: '业务合作' },
    { name: '技术支持', url: '#', description: '技术服务' }
];
</script>

<style lang="scss" scoped>
.footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    margin-top: auto;
    
    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 20px 20px;
    }
    
    .footer-sections {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 40px;
        margin-bottom: 30px;
    }
    
    .footer-section {
        h4 {
            color: #3498db;
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: 600;
            border-bottom: 2px solid #3498db;
            padding-bottom: 8px;
            display: inline-block;
        }
        
        p {
            line-height: 1.6;
            color: #bdc3c7;
            margin-bottom: 10px;
        }
    }
    
    .footer-links {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
            margin-bottom: 8px;
            
            a {
                color: #bdc3c7;
                text-decoration: none;
                transition: color 0.3s ease;
                
                &:hover {
                    color: #3498db;
                }
            }
        }
    }
    
    .contact-info {
        p {
            margin-bottom: 8px;
            display: flex;
            align-items: center;
        }
    }
    
    .social-links {
        display: flex;
        gap: 15px;
        margin-top: 15px;
        
        .social-link {
            display: inline-block;
            padding: 8px 12px;
            background-color: #34495e;
            color: #ecf0f1;
            text-decoration: none;
            border-radius: 4px;
            font-size: 12px;
            transition: background-color 0.3s ease;
            
            &:hover {
                background-color: #3498db;
            }
        }
    }
    
    .footer-bottom {
        border-top: 1px solid #34495e;
        padding-top: 20px;
        text-align: center;
        
        p {
            color: #95a5a6;
            font-size: 14px;
            margin: 0;
        }
    }
    
    // 响应式设计
    @media (max-width: 768px) {
        .footer-sections {
            grid-template-columns: 1fr;
            gap: 30px;
        }
        
        .footer-content {
            padding: 30px 15px 15px;
        }
        
        .social-links {
            justify-content: center;
        }
    }
}
</style>