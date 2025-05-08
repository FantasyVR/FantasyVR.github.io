const websiteData = {
    // 导航栏
    "nav": {
        "zh": {
            "about": "关于我",
            "news": "新闻动态",
            "publications": "出版物",
            "presentations": "报告",
            "services": "学术服务",
            "projects": "项目",
            "awards": "荣誉与奖项"
        },
        "en": {
            "about": "About Me",
            "news": "News",
            "publications": "Publications",
            "presentations": "Presentations",
            "services": "Academic Services",
            "projects": "Projects",
            "awards": "Awards"
        }
    },
    
    // 个人信息
    "profile": {
        "zh": {
            "name": "禹鹏",
            "title": "博士后 | 北航",
            "email": "pengyu@buaa.edu.cn",
            "linkedin": "https://www.linkedin.com/in/peng-yu-03262a59/",
            "github": "https://github.com/FantasyVR",
            "orcid": "https://orcid.org/my-orcid?orcid=0000-0002-8652-2744"
        },
        "en": {
            "name": "Dr. Peng Yu",
            "title": "Postdoctoral Researcher | Beihang University",
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
            "title": "论文列表",
            "corresponding_note": "* 通讯作者",
            "cofirst_note": "† 共同第一作者"
        },
        "en": {
            "title": "Publications",
            "corresponding_note": "* denotes corresponding author",
            "cofirst_note": "† denotes equal contribution"
        },
        "items": [
            {
                "title": "MGPBD: A Multigrid Accelerated Global XPBD Solver",
                "authors": [
                    {"name": "Chunlei Li","cofirst":true, },
                    {"name": "Peng Yu", "cofirst":true, "bold": true},
                    {"name": "Tiantian Liu"},
                    {"name": "Siyuan Yu"},
                    {"name": "Yuting Xiao"},
                    {"name": "Shuai Li","corresponding": true,},
                    {"name": "Aimin Hao"},
                    {"name": "Yang Gao",  "url": "https://gaoyangvr.github.io/","corresponding": true},
                    {"name": "Qinping Zhao"}
                ],
                "venue": "Siggraph Conference, 2025",
                "thumbnail": "images/siggraph2025.jpeg",
                "links": {
                    "pdf": "PDF/siggraph2025.pdf",
                    "video": "Video/siggraph2025.mp4",
                    "bibtex": "bib/siggraph2025.bib"
                }
            },
            {
                "title": "Real-Time Immersive Haptic Sculpting with Elastoplastic Virtual Clay",
                "authors": [
                    {"name": "Peng Yu", "bold": true},
                    {"name": "Zhiyang Ji"},
                    {"name": "Yang Gao",  "url": "https://gaoyangvr.github.io/","corresponding": true},
                    {"name": "Aimin Hao"}
                ],
                "venue": "The Visual Computer, 2025",
                "thumbnail": "images/tvc2025.png",
                "links": {
                    "pdf": "PDF/tvc2025.pdf",
                    "video": "Video/tvc2025.mp4",
                    "bibtex": "bib/tvc2025.bib"
                }
            },
            {
                "title": "Immersive Virtual Sculpting Experience with Elastoplastic Clay Simulation and Real-Time Haptic Feedback",
                "authors": [
                    {"name": "Yang Gao", "url": "https://gaoyangvr.github.io/"},
                    {"name": "Zhiyang Ji"},
                    {"name": "Peng Yu", "corresponding": true, "bold": true},
                    {"name": "Aimin Hao"}
                ],
                "venue": "IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct), 2024",
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
                    "bibtex": "bib/tvc2024.bib",
                    "slides": "PPT/CGI2024.pdf"
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
                    "video": "Video/CMPB2024.mp4",
                    "bibtex": "bib/CMPB2024.bib"
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
                "venue": "IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW), 2021",
                "thumbnail": "images/IEEEVR2021.jpg",
                "note": "Best Honorable Mention Posters",
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
                    "bibtex": "bib/CAVW2020.bib",
                    "slides": "PPT/CASA2020.pdf"
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
                    "slides": "PPT/IEEEVR2020.pdf"
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
                },
                {
                    "date": "2024",
                    "content": "北京航空航天大学2024年计算机学院科研贡献奖"
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
                },
                {
                    "date": "2024",
                    "content": "2024 Research Contribution Award of School of Computer Science and Engineering (SCSE), Beihang University"
                }
            ]
        }
    },
    
    // 报告
    "presentations": {
        "zh": {
            "title": "报告",
            "items": [
                {
                    "date": "2024.1.17",
                    "venue": "厦门大学计算机图形学与社交型机器人青年学者论坛",
                    "title": "复杂手术操作实时交互仿真与量化评价方法研究"
                }
            ]
        },
        "en": {
            "title": "Presentations",
            "items": [
                {
                    "date": "2024.1.17",
                    "venue": " Xiamen University's Forum for Emerging Scholars in CG & Social Robotics",
                    "title": "Research on real-time interactive simulation and quantitative evaluation method of complex surgical operations"
                }
            ]
        }
    },
    
    // 学术服务
    "services": {
        "zh": {
            "title": "学术服务",
            "items": [
                {
                    "name": "IEEE VR (CCF A, Top Conference)",
                    "years": ["2021"]
                },
                {
                    "name": "International Symposium on Mixed and Augmented Reality (ISMAR), CCF B",
                    "years": ["2024", "2025"]
                },
                {
                    "name": "Computer Methods and Programs in Biomedicine (CMPB), Top Journal",
                    "years": ["2024"]
                },
                {
                    "name": "Journal of Robotic Surgery",
                    "years": ["2025"]
                }
            ]
        },
        "en": {
            "title": "Academic Services",
            "items": [
                {
                    "name": "IEEE VR (CCF A, Top Conference)",
                    "years": ["2021"]
                },
                {
                    "name": "International Symposium on Mixed and Augmented Reality (ISMAR), CCF B",
                    "years": ["2024", "2025"]
                },
                {
                    "name": "Computer Methods and Programs in Biomedicine (CMPB), Top Journal",
                    "years": ["2024"]
                },
                {
                    "name": "Journal of Robotic Surgery",
                    "years": ["2025"]
                }
            ]
        }
    },
    
    // 项目
    "projects": {
        "zh": {
            "title": "项目",
            "items": [
                {
                    "institution": "中国博士后科学基金会",
                    "type": "国家资助博士后研究人员计划C档",
                    "name": "基于线性求解器加速的实时交互仿真及在腹腔镜手术模拟中的应用",
                    "code": "GZC20233375",
                    "period": "2023-10至2025-07",
                    "amount": "24万元",
                    "status": "在研",
                    "role": "主持"
                },
                {
                    "institution": "科技部",
                    "type": "国家重点研发计划",
                    "name": "面向残障人群的复杂环境模拟及行为监测分析综合平台",
                    "code": "2023YFC3604505",
                    "period": "2023-10至2025-06",
                    "amount": "14万元",
                    "status": "在研",
                    "role": "子课题负责人"
                },
                {
                    "institution": "国家自然科学基金委员会",
                    "type": "面上项目",
                    "name": "基于增强现实的腹腔镜结肠癌手术精准导航技术及验证",
                    "code": "62172437",
                    "period": "2022-01至2025-12",
                    "amount": "61万元",
                    "status": "在研",
                    "role": "骨干成员"
                },
                {
                    "institution": "国家自然科学基金委员会",
                    "type": "面上项目",
                    "name": "基于元球和无网格模型混合方法的可交互软组织建模及其在神经外科手术模拟中的应用",
                    "code": "61872020",
                    "period": "2019-01至2022-12",
                    "amount": "65万元",
                    "status": "结题",
                    "role": "骨干成员"
                },
                {
                    "institution": "北京市自然科学基金",
                    "type": "海淀原始创新联合基金重点项目",
                    "name": "体数据实时变形交互操作及其在肺癌手术仿真的应用",
                    "code": "L182016",
                    "period": "2019-01至2021-12",
                    "amount": "98万元",
                    "status": "结题",
                    "role": "参与"
                }
            ]
        },
        "en": {
            "title": "Projects",
            "items": [
                {
                    "institution": "China Postdoctoral Science Foundation",
                    "type": "National Postdoctoral Program for Innovative Talents (Category C)",
                    "name": "Real-time Interactive Simulation Based on Linear Solver Acceleration and Its Application in Laparoscopic Surgery Simulation",
                    "code": "GZC20233375",
                    "period": "Oct 2023 - Jul 2025",
                    "amount": "240,000 CNY",
                    "status": "Ongoing",
                    "role": "Principal Investigator"
                },
                {
                    "institution": "Ministry of Science and Technology",
                    "type": "National Key Research and Development Program",
                    "name": "Comprehensive Platform for Complex Environment Simulation and Behavior Monitoring Analysis for Disabled Population",
                    "code": "2023YFC3604505",
                    "period": "Oct 2023 - Jun 2025",
                    "amount": "140,000 CNY",
                    "status": "Ongoing",
                    "role": "Sub-project Leader"
                }
            ]
        }
    },
    
    // 页脚
    "footer": {
        "zh": {
            "copyright": "© 2025 禹鹏. All rights reserved."
        },
        "en": {
            "copyright": "© 2025 Peng Yu. All rights reserved."
        }
    }
}; 
