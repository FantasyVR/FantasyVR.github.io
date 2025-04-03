const websiteData = {
    // 导航栏
    "nav": {
        "zh": {
            "about": "关于我",
            "news": "新闻动态",
            "publications": "出版物",
            "awards": "荣誉与奖项"
        },
        "en": {
            "about": "About Me",
            "news": "News",
            "publications": "Publications",
            "awards": "Awards"
        }
    },
    
    // 个人信息
    "profile": {
        "zh": {
            "name": "禹鹏",
            "title": "博士后",
            "email": "pengyu@buaa.edu.cn",
            "linkedin": "https://www.linkedin.com/in/peng-yu-03262a59/",
            "github": "https://github.com/FantasyVR",
            "orcid": "https://orcid.org/my-orcid?orcid=0000-0002-8652-2744"
        },
        "en": {
            "name": "Dr. Peng Yu",
            "title": "Postdoctoral Researcher",
            "email": "pengyu@buaa.edu.cn",
            "linkedin": "https://www.linkedin.com/in/peng-yu-03262a59/",
            "github": "https://github.com/FantasyVR",
            "orcid": "https://orcid.org/my-orcid?orcid=0000-0002-8652-2744"
        }
    },
    
    // 关于我
    "about": {
        "zh": {
            "title": "关于我",
            "content": "我是北京航空航天大学<a href='https://vrlab.buaa.edu.cn'>虚拟现实技术与系统国家重点实验室</a>的博士后研究员。此前，我于2022年获得北京航空航天大学博士学位， 由<a href='https://scse.buaa.edu.cn/info/1078/2654.htm'>郝爱民</a>教授、<a href='https://scse.buaa.edu.cn/info/1078/8380.htm'>潘俊君</a>教授和<a href='https://www3.cs.stonybrook.edu/~qin/'>秦洪</a>教授联合指导。我的研究旨在为图形学、物理仿真、人机交互、医学模拟器等领域的挑战性问题开发高效且定制化的计算方法。"
        },
        "en": {
            "title": "About Me",
            "content": "I'm a Post Doctoral Researcher at the <a href='https://vrlab.buaa.edu.cn'>State Key Lab of VR Tech & System</a>, School of Computer Science and Engineering (SCSE) of Beihang University. Before that, I received my Ph.D. degree from <a href='https://ev.buaa.edu.cn/'>Beihang University</a> in 2022. I was jointly supervised by <a href='https://scse.buaa.edu.cn/info/1387/10323.htm'>Prof. Aimin Hao</a>, <a href='https://shi.buaa.edu.cn/junjun_pan/en/index.htm'>Prof. Junjun Pan</a> and <a href='https://www3.cs.stonybrook.edu/~qin/'>Prof. Hong Qin</a>. My research aims to develop efficient and customized computing methods for challenging problems in Graphics, Simulation, HCI, Medical Simulator, and many other applied areas."
        }
    },
    
    // 新闻动态
    "news": {
        "zh": {
            "title": "新闻动态",
            "items": [
                {
                    "date": "2024.07",
                    "content": "在瑞士日内瓦CGI会议上报告论文"
                },
                {
                    "date": "2024.01",
                    "content": "在厦门大学计算机图形学与社交型机器人青年学者论坛作报告"
                }
            ]
        },
        "en": {
            "title": "News",
            "items": [
                {
                    "date": "2024.07",
                    "content": "Reported a paper at CGI Conference at Geneva, Switzerland"
                },
                {
                    "date": "2024.01",
                    "content": "Presented research on physics-based animation at Xiamen University's Forum for Emerging Scholars in CG & Social Robotics"
                }
            ]
        }
    },
    
    // 出版物
    "publications": {
        "zh": {
            "title": "出版物",
            "corresponding_note": "* 通讯作者",
            "cofirst_note": "† 共同第一作者"
        },
        "en": {
            "title": "Publications",
            "corresponding_note": "* Corresponding author",
            "cofirst_note": "† Co-first author"
        },
        "items": [
            {
                "title": "Immersive Virtual Sculpting Experience with Elastoplastic Clay Simulation and Real-Time Haptic Feedback",
                "authors": [
                    {"name": "Yang Gao", "url": "https://gaoyangvr.github.io/"},
                    {"name": "Zhiyang Ji"},
                    {"name": "Peng Yu", "corresponding": true, "bold": true},
                    {"name": "Aimin Hao"}
                ],
                "venue": "2024 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)",
                "thumbnail": "images/ismar2024.jpeg",
                "links": {
                    "pdf": "PDF/ismar2024.pdf",
                    "video": "Video/ismar2024.mp4",
                    "bibtex": "bib/ismar2024.bib"
                }
            },
            {
                "title": "Real-time Efficient Frictional Contacts for Soft Body Dynamics via ADMM",
                "authors": [
                    {"name": "Siyan Zhu"},
                    {"name": "Cheng Fang"},
                    {"name": "Peng Yu", "bold": true, "corresponding": true},
                    {"name": "Xiao Zhai", "corresponding": true},
                    {"name": "Aimin Hao"},
                    {"name": "Junjun Pan", "corresponding": true}
                ],
                "venue": "The Visual Computer, 2024",
                "thumbnail": "images/tvc2024.png",
                "links": {
                    "pdf": "PDF/tvc2024.pdf",
                    "video": "Video/tvc2024.mp4",
                    "bibtex": "bib/tvc2024.bib"
                }
            },
            {
                "title": "Real-time soft body dissection simulation with parallelized graph-based shape matching on GPU",
                "authors": [
                    {"name": "Peng Yu", "bold": true},
                    {"name": "Zhiyuan Zhao"},
                    {"name": "Ruiqi Wang"},
                    {"name": "Junjun Pan", "corresponding": true},
                ],
                "venue": "Computer Methods and Programs in Biomedicine, 2024",
                "thumbnail": "images/CMPB2024.png",
                "links": {
                    "pdf": "PDF/CMPB024.pdf",
                    "video": "Video/CMPB024.mp4",
                    "bibtex": "bib/CMPB024.bib"
                }
            },
            {
                "title": "Quantitative influence and performance analysis of virtual reality laparoscopic surgical training system",
                "authors": [
                    {"name": "Peng Yu", "bold": true},
                    {"name": "Junjun Pan", "corresponding": true},
                    {"name": "Zhaoxue Wang"},
                    {"name": "Yang Shen"},
                    {"name": "Lili Wang"},
                    {"name": "Jialun Li"},
                    {"name": "Aimin Hao"},
                    {"name": "Haipeng Wang"},
                ],
                "venue": "BMC Medical Education, 2022",
                "thumbnail": "images/bmc2022.png",
                "links": {
                    "pdf": "PDF/BMC_2022.pdf",
                    "bibtex": "bib/bmc2022.bib"
                }
            },
            {
                "title": "Cognitive Load/flow and Performance in Virtual Reality Simulation Training of Laparoscopic Surgery",
                "authors": [
                    {"name": "Peng Yu", "bold": true},
                    {"name": "Junjun Pan", "corresponding": true},
                    {"name": "Zhaoxue Wang"},
                    {"name": "Yang Shen"},
                    {"name": "Lili Wang"},
                    {"name": "Jialun Li"},
                    {"name": "Aimin Hao"},
                    {"name": "Haipeng Wang"},
                ],
                "venue": "2021 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)",
                "thumbnail": "images/IEEEVR2021.jpg",
                "links": {
                    "pdf": "PDF/IEEEVR2021.pdf",
                    "bibtex": "bib/IEEEVR2021.bib"
                }
            },
            {
                "title": "Real-time suturing simulation for virtual reality medical training",
                "authors": [
                    {"name": "Peng Yu", "bold": true},
                    {"name": "Junjun Pan", "corresponding": true},
                    {"name": "Hong Qin", "corresponding": true},
                    {"name": "Aimin Hao"},
                    {"name": "Haipeng Wang"},
                ],
                "venue": "Computer Animation and Virtual Worlds, 2020",
                "thumbnail": "images/CAVW2020.jpg",
                "links": {
                    "pdf": "PDF/CAVW2020.pdf",
                    "bibtex": "bib/CAVW2020.bib"
                }
            },
            {
                "title": "Real-time VR Simulation of Laparoscopic Cholecystectomy based on Parallel Position-based Dynamics in GPU",
                "authors": [
                    {"name": "Junjun Pan", "cofirst":true, "corresponding": true},
                    {"name": "Leiyu Zhang", "cofirst": true},
                    {"name": "Peng Yu", "cofirst":true, "bold": true},
                    {"name": "Yang Shen"},
                    {"name": "Haipeng Wang"},
                    {"name": "Aimin Hao"},
                    {"name": "Hong Qin"},
                ],
                "venue": "IEEE Conference on Virtual Reality and 3D User Interfaces (IEEE VR), 2020",
                "thumbnail": "images/IEEEVR2020.png",
                "links": {
                    "pdf": "PDF/IEEEVR2020.pdf",
                    "bibtex": "bib/IEEEVR2020.bib",
                    "slides": "PPT/IEEEVR2020.pptx"
                }
            }
        ]
    },
    
    // 荣誉与奖项
    "awards": {
        "zh": {
            "title": "荣誉与奖项",
            "items": [
                {
                    "date": "2024",
                    "content": "获得2024年中国仿真协会创新技术奖一等奖(排名：8/15)"
                },
                {
                    "date": "2024",
                    "content": "教育部重点领域虚拟教研室典型教研成果(排名：2/5)"
                }
            ]
        },
        "en": {
            "title": "Awards & Honors",
            "items": [
                {
                    "date": "2024",
                    "content": "Won the First Prize of the Innovation Technology Award from the China Simulation Federation in 2024 (Rank: 8/15)."
                },
                {
                    "date": "2024",
                    "content": "Exemplary Teaching & Research Achievement (Key Virtual Teaching & Research Office, MoE Priority Areas) (Rank: 2/5)"
                }
            ]
        }
    },
    
    // 页脚
    "footer": {
        "zh": {
            "copyright": "© 2024 禹鹏. All rights reserved."
        },
        "en": {
            "copyright": "© 2024 Peng Yu. All rights reserved."
        }
    }
}; 