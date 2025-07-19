// 批量替换HTML中的图片链接
// 在浏览器控制台中运行此脚本

const imageReplacements = {
    // 景点图片
    'https://images.unsplash.com/photo-1605000797499-95a51c5269ae': 'images/attractions/niuheliang-site.jpg',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176': 'images/attractions/fossil-park.jpg',
    'https://images.unsplash.com/photo-1589998059171-988d887df646': 'images/attractions/chaoyang-museum.jpg',
    
    // 餐厅图片
    'https://images.unsplash.com/photo-1563245372-f21724e3856d': 'images/restaurants/lanzhou-noodles.jpg',
    'https://images.unsplash.com/photo-1555126634-323283e090fa': 'images/restaurants/ban-noodles.jpg',
    'https://images.unsplash.com/photo-1585032226651-759b368d7246': 'images/restaurants/taizi-hotpot.jpg',
    
    // 酒店图片
    'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5': 'images/hotels/magnolia-hotel.jpg'
};

// 占位图片配置
const placeholderConfig = {
    'niuheliang-site.jpg': { color: '8B4513', text: '牛河梁遗址公园' },
    'fossil-park.jpg': { color: '2E8B57', text: '鸟化石地质公园' },
    'chaoyang-museum.jpg': { color: '4682B4', text: '朝阳博物馆' },
    'lanzhou-noodles.jpg': { color: 'D2691E', text: '拜记兰州牛肉面' },
    'ban-noodles.jpg': { color: 'CD853F', text: '孙记板面' },
    'taizi-hotpot.jpg': { color: 'DC143C', text: '徐师傅太子锅' },
    'magnolia-hotel.jpg': { color: '9370DB', text: '白玉兰酒店' }
};

// 生成占位图片URL
function generatePlaceholder(filename) {
    const config = placeholderConfig[filename];
    if (config) {
        return `https://via.placeholder.com/1200x800/${config.color}/FFFFFF?text=${encodeURIComponent(config.text)}`;
    }
    return `https://via.placeholder.com/1200x800/8B4513/FFFFFF?text=${encodeURIComponent('朝阳旅游')}`;
}

// 替换所有图片
function replaceAllImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const currentSrc = img.src;
        
        // 检查是否需要替换
        for (const [oldUrl, newUrl] of Object.entries(imageReplacements)) {
            if (currentSrc.includes(oldUrl.split('/').pop())) {
                img.src = newUrl;
                
                // 添加错误处理
                const filename = newUrl.split('/').pop();
                img.onerror = function() {
                    this.src = generatePlaceholder(filename);
                };
                
                // 添加懒加载
                img.loading = 'lazy';
                
                console.log(`替换图片: ${oldUrl} -> ${newUrl}`);
                break;
            }
        }
    });
}

// 执行替换
replaceAllImages();
console.log('图片替换完成！');