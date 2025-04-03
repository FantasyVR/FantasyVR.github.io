// 当前语言，默认为中文
let currentLanguage = 'zh';

// DOM加载完成后初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面内容
    updateContent(currentLanguage);
    
    // 注册语言切换事件
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('click', function() {
        // 切换语言
        currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
        
        // 更新语言切换按钮文本
        languageToggle.textContent = currentLanguage === 'zh' ? 'English' : '中文';
        languageToggle.setAttribute('data-lang', currentLanguage === 'zh' ? 'en' : 'zh');
        
        // 更新HTML语言标签
        document.documentElement.lang = currentLanguage;
        
        // 更新页面内容
        updateContent(currentLanguage);
        
        // 保存语言选择到 localStorage
        localStorage.setItem('preferred-language', currentLanguage);
    });
    
    // 从localStorage恢复语言偏好
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
        languageToggle.textContent = currentLanguage === 'zh' ? 'English' : '中文';
        languageToggle.setAttribute('data-lang', currentLanguage === 'zh' ? 'en' : 'zh');
        document.documentElement.lang = currentLanguage;
        updateContent(currentLanguage);
    }
});

// 更新页面内容
function updateContent(language) {
    // 更新导航栏
    updateNavigation(language);
    
    // 更新个人信息
    updateProfile(language);
    
    // 更新关于我
    updateSection('about', language);
    
    // 更新新闻动态
    updateNewsList(language);
    
    // 更新出版物
    updatePublications(language);
    
    // 更新荣誉与奖项
    updateAwards(language);
    
    // 更新页脚
    updateFooter(language);
    
    // 更新页面标题
    document.title = language === 'zh' ? '个人主页' : 'Personal Homepage';
}

// 更新导航栏
function updateNavigation(language) {
    const navLinks = document.querySelectorAll('.nav-links a');
    const navData = websiteData.nav[language];
    
    navLinks[0].textContent = navData.about;
    navLinks[1].textContent = navData.news;
    navLinks[2].textContent = navData.publications;
    navLinks[3].textContent = navData.awards;
}

// 更新个人信息
function updateProfile(language) {
    const profileData = websiteData.profile[language];
    
    document.querySelector('.name').textContent = profileData.name;
    document.querySelector('.title').textContent = profileData.title;
    
    // 更新联系方式链接
    const contactLinks = document.querySelectorAll('.contact-item a');
    contactLinks[0].href = `mailto:${profileData.email}`;
    contactLinks[1].href = profileData.linkedin;
    contactLinks[2].href = profileData.github;
    contactLinks[3].href = profileData.twitter;
}

// 更新普通部分
function updateSection(sectionId, language) {
    const section = document.getElementById(sectionId);
    const sectionData = websiteData[sectionId][language];
    
    section.querySelector('.section-title').childNodes[2].textContent = sectionData.title;
    section.querySelector('.section-content p').innerHTML = sectionData.content;
}

// 更新新闻列表
function updateNewsList(language) {
    const newsSection = document.getElementById('news');
    const newsData = websiteData.news[language];
    const newsList = newsSection.querySelector('.news-list');
    
    // 更新标题
    newsSection.querySelector('.section-title').childNodes[2].textContent = newsData.title;
    
    // 清空并重新填充新闻列表
    newsList.innerHTML = '';
    
    newsData.items.forEach(item => {
        const li = document.createElement('li');
        
        const dateSpan = document.createElement('span');
        dateSpan.className = 'date';
        dateSpan.textContent = item.date;
        
        const contentSpan = document.createElement('span');
        contentSpan.className = 'news-item';
        contentSpan.textContent = item.content;
        
        li.appendChild(dateSpan);
        li.appendChild(contentSpan);
        newsList.appendChild(li);
    });
}

// 更新出版物
function updatePublications(language) {
    const pubSection = document.getElementById('publications');
    const pubData = websiteData.publications;
    const pubList = pubSection.querySelector('.publications-list');
    let hasCorresponding = false;
    let hasCofirst = false;

    // 更新标题
    pubSection.querySelector('.section-title').childNodes[2].textContent = pubData[language].title;

    // 清空并重新填充出版物列表
    pubList.innerHTML = '';

    pubData.items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'publication-item';

        // 缩略图
        const thumbDiv = document.createElement('div');
        thumbDiv.className = 'publication-thumbnail';
        const img = document.createElement('img');
        img.src = item.thumbnail;
        img.alt = language === 'zh' ? '论文缩略图' : 'Paper Thumbnail';
        thumbDiv.appendChild(img);

        // 详细信息
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'publication-details';

        // 标题
        const title = document.createElement('span');
        title.className = 'publication-title';
        title.textContent = item.title + '. ';

        // 作者（带链接、标记和加粗）
        const authors = document.createElement('span');
        authors.className = 'publication-authors';
        const authorLinks = item.authors.map(author => {
            let authorElement;
            if (author.url) {
                authorElement = document.createElement('a');
                authorElement.href = author.url;
                authorElement.target = '_blank';
            } else {
                authorElement = document.createElement('span');
            }

            let nameContent = author.name;
            if (author.bold) {
                nameContent = `<strong class="author-bold">${author.name}</strong>`;
                authorElement.innerHTML = nameContent;
            } else {
                authorElement.textContent = nameContent;
            }

            let markers = '';
            if (author.cofirst) {
                markers += '†';
                hasCofirst = true;
            }
            if (author.corresponding) {
                markers += '*';
                hasCorresponding = true;
            }
            if (markers) {
                authorElement.innerHTML += `<sup class="author-marker">${markers}</sup>`;
            }

            return authorElement;
        });
        authors.innerHTML = authorLinks.map(link => link.outerHTML).join(', ') + '. ';

        // 会议/期刊
        const venue = document.createElement('span');
        venue.className = 'publication-venue';
        venue.textContent = item.venue;

        // 链接
        const linksDiv = document.createElement('div');
        linksDiv.className = 'publication-links';

        if (item.links.pdf) {
            const pdfLink = document.createElement('a');
            pdfLink.href = item.links.pdf;
            pdfLink.className = 'publication-link';
            pdfLink.innerHTML = '<i class="fas fa-file-pdf"></i>';
            pdfLink.title = 'PDF';
            linksDiv.appendChild(pdfLink);
        }
        
        if (item.links.video) {
            const videoLink = document.createElement('a');
            videoLink.href = item.links.video;
            videoLink.className = 'publication-link';
            videoLink.innerHTML = '<i class="fas fa-video"></i>';
            videoLink.title = 'Video';
            linksDiv.appendChild(videoLink);
        }
        
        if (item.links.bibtex) {
            const bibtexLink = document.createElement('a');
            bibtexLink.href = item.links.bibtex;
            bibtexLink.className = 'publication-link';
            bibtexLink.innerHTML = '<i class="fas fa-quote-right"></i>';
            bibtexLink.title = 'BibTeX';
            linksDiv.appendChild(bibtexLink);
        }
        
        if (item.links.slides) {
            const slidesLink = document.createElement('a');
            slidesLink.href = item.links.slides;
            slidesLink.className = 'publication-link';
            slidesLink.innerHTML = '<i class="fas fa-file-powerpoint"></i>';
            slidesLink.title = 'Slides';
            linksDiv.appendChild(slidesLink);
        }

        detailsDiv.appendChild(title);
        detailsDiv.appendChild(authors);
        detailsDiv.appendChild(venue);
        detailsDiv.appendChild(linksDiv);

        li.appendChild(thumbDiv);
        li.appendChild(detailsDiv);
        pubList.appendChild(li);
    });

    // 添加标记说明到标题行
    const sectionTitleElement = pubSection.querySelector('.section-title');
    const notesContainer = document.createElement('span'); // Use span for inline behavior
    notesContainer.className = 'publication-notes';
    if (hasCofirst) {
        const cofirstNote = document.createElement('span');
        // cofirstNote.className = 'cofirst-note'; // Class no longer needed for individual styling here
        cofirstNote.textContent = pubData[language].cofirst_note;
        notesContainer.appendChild(cofirstNote);
    }
    if (hasCorresponding) {
        const correspondingNote = document.createElement('span');
        // correspondingNote.className = 'corresponding-note'; // Class no longer needed for individual styling here
        correspondingNote.textContent = pubData[language].corresponding_note;
        notesContainer.appendChild(correspondingNote);
    }
    if (notesContainer.hasChildNodes()) {
        // Remove existing notes if any (e.g., from language switch)
        const existingNotes = sectionTitleElement.querySelector('.publication-notes');
        if (existingNotes) {
            sectionTitleElement.removeChild(existingNotes);
        }
        sectionTitleElement.appendChild(notesContainer);
    }
}

// 更新奖项列表
function updateAwards(language) {
    const awardsSection = document.getElementById('awards');
    const awardsData = websiteData.awards[language];
    const awardsList = awardsSection.querySelector('.awards-list');
    
    // 更新标题
    awardsSection.querySelector('.section-title').childNodes[2].textContent = awardsData.title;
    
    // 清空并重新填充奖项列表
    awardsList.innerHTML = '';
    
    awardsData.items.forEach(item => {
        const li = document.createElement('li');
        
        const dateSpan = document.createElement('span');
        dateSpan.className = 'date';
        dateSpan.textContent = item.date;
        
        const contentSpan = document.createElement('span');
        contentSpan.className = 'award-item';
        contentSpan.textContent = item.content;
        
        li.appendChild(dateSpan);
        li.appendChild(contentSpan);
        awardsList.appendChild(li);
    });
}

// 更新页脚
function updateFooter(language) {
    const footer = document.querySelector('.footer p');
    footer.textContent = websiteData.footer[language].copyright;
} 