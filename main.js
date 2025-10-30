/******
    _              _                                _ 
   | |            | |                              | |
 __| |___ ___  ___| |__  __ _ ___   ___   ___   ___| |__   ___  _ __
|__   __ / _ \/ __|  _ \|  _ ‘ _ \ / _ \ / _ \ / __|  _ \ / _ \/  __\
   | |_ |  __/ (__| | | | | | | | | (_) | (_) | (__| | | |  __/| |
   \_ _ /\___/\___|_| |_|_| |_| |_|\___/ \___/ \___|_| |_|\___/|_|

******/

document.addEventListener('DOMContentLoaded', () => {
    const allMysteries = {
        "Sự Vui": {
            title: "Năm Sự Vui",
            1: "Thứ nhất thì ngắm: Thiên thần truyền tin cho Đức Bà chịu thai. Ta hãy xin cho được ở khiêm nhường.",
            2: "Thứ hai thì ngắm: Đức Mẹ đi viếng bà thánh Isave. Ta hãy xin cho được lòng yêu người.",
            3: "Thứ ba thì ngắm: Đức Mẹ sinh Đức Chúa Giêsu trong hang đá. Ta hãy xin cho được lòng khó khăn.",
            4: "Thứ bốn thì ngắm: Đức Bà dâng Đức Chúa Giêsu trong đền Thánh. Ta hãy xin cho được vâng lời chịu lụy.",
            5: "Thứ năm thì ngắm: Đức Bà tìm được Đức Chúa Giêsu trong Đền thánh. Ta hãy xin cho đươc giữ nghĩa cùng Chúa luôn."
        },
        "Sự Sáng": {
            title: "Năm Sự Sáng",
            1: "Thứ nhất thì ngắm: Đức Chúa Giêsu chịu phép rửa tại sông Gio-đan. Ta hãy xin cho được sống xứng đáng làm con cái Chúa.",
            2: "Thứ hai thì ngắm: Đức Chúa Giêsu làm phép lạ tại tiệc cưới Cana. Ta hãy xin cho được noi gương Đức Mẹ mà vững tin vào Chúa.",
            3: "Thứ ba thì ngắm: Đức Chúa Giêsu rao giảng Nước Trời và kêu gọi ăn năn. Ta hãy xin cho được hoán cải và đón nhận Tin Mừng.",
            4: "Thứ bốn thì ngắm: Đức Chúa Giêsu biến hình trên núi. Ta hãy xin cho được lắng nghe và thực hành lời Chúa.",
            5: "Thứ năm thì ngắm: Đức Chúa Giêsu lập bí tích Thánh Thể. Ta hãy xin cho được năng kết hiệp cùng Chúa Giêsu Thánh Thể."
        },
        "Sự Thương": {
            title: "Năm Sự Thương",
            1: "Thứ nhất thì ngắm: Đức Chúa Giêsu lo buồn đổ mồ hôi máu. Ta hãy xin cho được ăn năn tội nên.",
            2: "Thứ hai thì ngắm: Đức Chúa Giêsu chịu đánh đòn. Ta hãy xin cho được hãm mình chịu khó bằng lòng.",
            3: "Thứ ba thì ngắm: Đức Chúa Giêsu chịu đội mão gai. Ta hãy xin cho được chịu mọi sự sỉ nhục bằng lòng.",
            4: "Thứ bốn thì ngắm: Đức Chúa Giêsu vác Thánh Giá. Ta hãy xin cho được vác Thánh Giá theo chân Chúa.",
            5: "Thứ năm thì ngắm: Đức Chúa Giêsu chịu chết trên cây Thánh Giá. Ta hãy xin đóng đinh tính xác thịt vào Thánh Giá Chúa."
        },
        "Sự Mừng": {
            title: "Năm Sự Mừng",
            1: "Thứ nhất thì ngắm: Đức Chúa Giêsu sống lại. Ta hãy xin cho được sống lại thật về phần linh hồn.",
            2: "Thứ hai thì ngắm: Đức Chúa Giêsu lên trời. Ta hãy xin cho được ái mộ những sự trên trời.",
            3: "Thứ ba thì ngắm: Đức Chúa Thánh Thần hiện xuống. Ta hãy xin cho được lòng đầy rẫy mọi ơn Đức Chúa Thánh Thần.",
            4: "Thứ bốn thì ngắm: Đức Chúa Trời cho Đức Bà lên trời. Ta hãy xin cho được ơn chết lành trong tay Đức Mẹ.",
            5: "Thứ năm thì ngắm: Đức Chúa Trời thưởng Đức Mẹ trên trời. Ta hãy xin Đức Mẹ phù hộ cho ta được thưởng cùng Đức Mẹ trên nước Thiên Đàng."
        }
    };

    const prayers = {
        "Dấu Thánh Giá": {
            title: "Dấu Thánh Giá",
            text: "Nhân danh Cha, và Con, và Thánh Thần. Amen.",
            image: "assets/images/sign-of-the-cross.jpeg"
        },
        "Kinh Tin Kính": {
            title: "Kinh Tin Kính",
            text: "Tôi tin kính Đức Chúa Trời là Cha phép tắc vô cùng dựng nên trời đất. Tôi tin kính Đức Chúa Giêsu Kitô là con một Đức Chúa Cha, cùng là Chúa chúng tôi. Bởi phép Đức Chúa Thánh Thần mà Người xuống thai, sinh bởi Bà Maria Đồng Trinh. Chịu nạn đời quan Phong-xi-ô Phi-la-tô, chịu đóng đinh trên cây Thánh Giá, chết và táng xác, xuống ngục tổ tông, ngày thứ ba bởi trong kẻ chết sống lại. Lên trời ngự bên hữu Đức Chúa Cha phép tắc vô cùng. Ngày sau bởi trời lại xuống phán xét kẻ sống và kẻ chết. Tôi tin kính Đức Chúa Thánh Thần. Tôi tin có Hội Thánh hằng có ở khắp thế này, các Thánh thông công. Tôi tin phép tha tội. Tôi tin xác loài người ngày sau sống lại. Tôi tin hằng sống vậy. Amen.",
            image: null
        },
        "Kinh Lạy Cha": {
            title: "Kinh Lạy Cha",
            text: "Lạy Cha chúng con ở trên trời, chúng con nguyện danh Cha cả sáng, nước Cha trị đến, ý Cha thể hiện dưới đất cũng như trên trời. Xin Cha cho chúng con hôm nay lương thực hằng ngày, và tha nợ chúng con, như chúng con cũng tha kẻ có nợ chúng con. Xin chớ để chúng con sa chước cám dỗ, nhưng cứu chúng con cho khỏi sự dữ. Amen.",
            image: null
        },
        "Kinh Kính Mừng": {
            title: "Kinh Kính Mừng",
            text: "Kính mừng Maria đầy ơn phúc, Đức Chúa Trời ở cùng Bà, Bà có phúc lạ hơn mọi người nữ, và Giêsu con lòng Bà gồm phúc lạ. Thánh Maria Đức Mẹ Chúa Trời cầu cho chúng con là kẻ có tội, khi này và trong giờ lâm tử. Amen.",
            image: null
        },
        "Kinh Sáng Danh": {
            title: "Kinh Sáng Danh",
            text: "Sáng danh Đức Chúa Cha, và Đức Chúa Con, và Đức Chúa Thánh Thần. Như đã có trước vô cùng, và bây giờ, và hằng có, và đời đời chẳng cùng. Amen.",
            image: null
        },
        "Lời Nguyện Fatima": {
            title: "Lời Nguyện Fatima",
            text: "Lạy Chúa Giêsu, xin tha tội cho chúng con, xin cứu chúng con khỏi sa hỏa ngục, xin đem các linh hồn lên thiên đàng, nhất là những linh hồn cần đến lòng Chúa thương xót hơn.",
            image: null
        },
        "Kinh Lạy Nữ Vương": {
            title: "Kinh Lạy Nữ Vương",
            text: "Lạy Nữ Vương, Mẹ nhân lành, làm cho chúng con được sống, được vui, được cậy. Thân lạy Mẹ, chúng con, con cháu E-và ở chốn khách đầy kêu đến cùng Bà. Chúng con ở nơi khóc lóc, than thở, kêu khẩn Bà thương. Hỡi ôi! Bà là Chủ bầu chúng con, xin ghé mắt thương xem chúng con. Đến sau khỏi đày, xin cho chúng con được thấy Đức Chúa Giêsu, con lòng Bà gồm phúc lạ. Ôi khoan thay, nhân thay, Dịu thay, Thánh Maria trọn đời đồng trinh. Amen.",
            image: null
        },
        "Kinh Trông Cậy": {
            title: "Kinh Trông Cậy",
            text: "Chúng con trông cậy Rất Thánh Đức Mẹ Chúa Trời, xin chớ chê chớ bỏ lời chúng con nguyện trong cơn gian nan thiếu thốn, Đức Nữ Đồng Trinh hiển vinh sáng láng, hằng chữa chúng con cho khỏi sự dữ. Amen.",
            image: null
        },
        "Các Lời Nguyện Vắn Tắt": {
            title: "Các Lời Nguyện Vắn Tắt",
            text: `+ Lạy Rất Thánh Trái Tim Đức Chúa Giêsu.
            - Thương xót chúng con.

            + Lạy Trái Tim Cực Thánh Cực Tịnh Rất Thánh Đức Bà Maria.
            - Cầu cho chúng con.

            + Lạy Ông Thánh Giuse là bạn thanh sạch Đức Bà Maria trọn đời đồng trinh.
            - Cầu cho chúng con.

            + Nữ Vương ban sự bình an.
            - Cầu cho giáo xứ chúng con.

            + Đức Mẹ La Vang.
            - Cầu cho gia đình chúng con.

            + Các Thánh Tử Đạo Việt Nam.
            - Cầu cho chúng con.`,
            image: null
        }
    };

    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    const dayOfWeek = new Date().getDay();
    const mysteryMap = [ "Sự Mừng", "Sự Vui", "Sự Thương", "Sự Mừng", "Sự Sáng", "Sự Thương", "Sự Vui" ];
    const todayMysteryName = mysteryMap[dayOfWeek];

    const mysteryDisplay = document.getElementById('today-mystery-display');
    if (mysteryDisplay) {
        const fullMysteryTitle = allMysteries[todayMysteryName].title;
        mysteryDisplay.innerHTML = `<b>Mầu Nhiệm hôm nay:</b> ${fullMysteryTitle}.`;
    }

    function openModal(prayerKey) {
        let prayerData;

        if (prayerKey.startsWith('Mầu Nhiệm')) {
            const mysteryNumber = prayerKey.split(' ')[3];
            const mysterySet = allMysteries[todayMysteryName];
            let text = mysterySet ? mysterySet[mysteryNumber] : null;

            if (text) {
                text = text.replace(/(Thứ[^:]+?thì ngắm:)/u, '<b>$1</b>');
                prayerData = {
                    title: `${mysterySet.title} - Mầu Nhiệm Thứ ${mysteryNumber}`,
                    text: text,
                    image: null
                };
            }
        } else {
            prayerData = prayers[prayerKey];
        }

        if (!prayerData) return;

        modalTitle.textContent = prayerData.title;
        modalContent.innerHTML = '';
        const p = document.createElement('p');
        p.innerHTML = prayerData.text.replace(/\n/g, '<br>');
        modalContent.appendChild(p);

        if (prayerData.image) {
            const img = document.createElement('img');
            img.src = prayerData.image;
            img.alt = prayerData.title;
            modalContent.appendChild(img);
        }
        modalOverlay.classList.remove('hidden');
    }

    function closeModal() {
        modalOverlay.classList.add('hidden');
    }

    document.body.addEventListener('click', (e) => {
        const prayerTrigger = e.target.closest('.interactive-prayer');
        if (prayerTrigger) {
            e.preventDefault();
            openModal(prayerTrigger.dataset.prayer);
        }
    });
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    const decadesContainer = document.getElementById('decades-container');
    if (decadesContainer) {
        for (let i = 1; i <= 5; i++) {
            const decadeSection = document.createElement('section');
            decadeSection.className = 'screen decade-screen';
            decadeSection.id = `decade-${i}`;
            
            const smallBeadsHtml = `
                <div class="bead-group-horizontal">
                    ${'<div class="bead small rosary-part"></div>'.repeat(10)}
                </div>
            `;
            
            // decadeSection.innerHTML = `
            //     <div class="content rosary-parts">
            //         <h2>${allMysteries[todayMysteryName].title}</h2>
            //         <div class="rosary-item-container">
            //             <div class="rosary-visual">
            //                 <div class="bead large rosary-part"></div>
            //             </div>
            //             <div class="rosary-text">
            //                 <p>Xướng <span class="interactive-prayer" tabindex="0" data-prayer="Mầu Nhiệm Thứ ${i}">Mầu Nhiệm Thứ ${i}</span></p>
            //                 <p>Đọc <span class="interactive-prayer" tabindex="0" data-prayer="Kinh Lạy Cha">Kinh Lạy Cha</span>.</p>
            //             </div>
            //         </div>
            //         <div class="rosary-item-container decade-item">
            //             <div class="rosary-visual"></div>
            //             <div class="rosary-text">
            //                 ${smallBeadsHtml}
            //                 <p>Đọc 10 <span class="interactive-prayer" tabindex="0" data-prayer="Kinh Kính Mừng">Kinh Kính Mừng</span>.</p>
            //             </div>
            //         </div>
            //         <div class="rosary-item-container">
            //             <div class="rosary-visual"></div>
            //             <div class="rosary-text">
            //                  <p>Đọc <span class="interactive-prayer" tabindex="0" data-prayer="Kinh Sáng Danh">Kinh Sáng Danh</span> và <span class="interactive-prayer" tabindex="0" data-prayer="Lời Nguyện Fatima">Lời Nguyện Fatima</span>.</p>
            //             </div>
            //         </div>
            //     </div>
            // `;
            decadeSection.innerHTML = `
                <div class="content rosary-parts">
                    <h2>Mầu Nhiệm Thứ ${i}</h2>
                    <div class="rosary-item-container">
                        <div class="rosary-visual">
                            <div class="bead large rosary-part"></div>
                        </div>
                        <div class="rosary-text">
                            <p>Xướng <span class="interactive-prayer" tabindex="0" data-prayer="Mầu Nhiệm Thứ ${i}">Mầu Nhiệm Thứ ${i}</span></p>
                            <p>Đọc <span class="interactive-prayer" tabindex="0" data-prayer="Kinh Lạy Cha">Kinh Lạy Cha</span>.</p>
                        </div>
                    </div>
                    <div class="rosary-item-container decade-item">
                        <div class="rosary-visual"></div>
                        <div class="rosary-text">
                            ${smallBeadsHtml}
                            <p>Đọc 10 <span class="interactive-prayer" tabindex="0" data-prayer="Kinh Kính Mừng">Kinh Kính Mừng</span>.</p>
                        </div>
                    </div>
                    <div class="rosary-item-container">
                        <div class="rosary-visual"></div>
                        <div class="rosary-text">
                             <p>Đọc <span class="interactive-prayer" tabindex="0" data-prayer="Kinh Sáng Danh">Kinh Sáng Danh</span> và <span class="interactive-prayer" tabindex="0" data-prayer="Lời Nguyện Fatima">Lời Nguyện Fatima</span>.</p>
                        </div>
                    </div>
                </div>
            `;
            decadesContainer.appendChild(decadeSection);
        }
    }
    
    const timelineItems = document.querySelectorAll('#timeline li');
    const sections = document.querySelectorAll('.screen');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observerOptions = {
        root: document.getElementById('rosary-container'),
        rootMargin: '0px',
        threshold: 0.6
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                timelineItems.forEach(item => {
                    item.classList.toggle('active', item.dataset.target === targetId);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});