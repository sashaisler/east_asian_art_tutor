const STUDY_ITEMS = [
  {
    id: 1,
    title: 'painted bowl with human face and fish motif (Banpo bowl)',
    date: '5000–3000 BCE',
    period: 'Neolithic period (Yangshao culture)',
    medium: 'ceramic (clay) with black slip / painted decoration; coil-built bowl',
    maker: 'Yangshao culture',
    importance: 'Early northwest painted pottery; coil-built bowl with interior decoration, showing strong visual design over texture.',
  },
  {
    id: 2,
    title: 'Kui Three-legged pitcher (tripod ewer)',
    date: '3000–2000 BCE',
    period: 'Neolithic period (Longshan culture)',
    medium: 'Ceramic (earthenware)',
    maker: 'Longshan culture',
    importance: 'Thin eggshell pottery with tripod legs that “animate” the form; linked in the sheet to hunting society, animal-shaped burial pottery, and eastern coastal tradition.',
  },
  {
    id: 3,
    title: 'Flame-style vessel (kaen-doki)',
    date: '2500–1500 BCE',
    period: 'Middle–Late Jōmon period',
    medium: 'Clay / ceramic, coil-built',
    maker: 'Jōmon culture, Niigata region (Japan)',
    importance: 'Coil-built Jōmon pottery with dramatic flame-like design; shows early Japanese ceramics were highly expressive, not just utilitarian.',
  },
  {
    id: 4,
    title: 'Ganghwa dolmen',
    date: '1000 BCE',
    period: 'Bronze Age (Korean Peninsula)',
    medium: 'Stone (megalithic construction)',
    maker: 'Bronze Age culture of the Korean Peninsula',
    importance: 'Elite funerary monument or burial marker; shows hierarchy in Bronze Age Korea.',
  },
  {
    id: 5,
    title: 'Standing robed Sanxingdui deity figure on pedestal with missing staff',
    date: '1200–1000 BCE',
    period: 'late Shang period',
    medium: 'Bronze',
    maker: 'Sanxingdui culture',
    importance: 'Important because it breaks the “single origin” theory; shows an independent advanced bronze culture in Sichuan with an otherworldly style.',
  },
  {
    id: 6,
    title: 'Yu (lidded ritual wine vessel)',
    date: '1200–1046 BCE',
    period: 'late Shang dynasty',
    medium: 'Bronze',
    maker: 'Shang culture',
    importance: 'Peak of ritual bronze monumentality; the vessel and animal motif are fully unified, projecting Shang political and religious power.',
  },
  {
    id: 7,
    title: 'Taotie mask motif (bronze vessel decoration)',
    date: '1600–1046 BCE',
    period: 'Shang dynasty',
    medium: 'Bronze (cast relief decoration)',
    maker: 'identified by Max Loehr, created by Shang dynasty artisans',
    importance: 'Show Max Loehr’s five bronze styles, from thin linear decoration to raised relief motifs.',
  },
  {
    id: 8,
    title: 'Bronze Hu ritual vessel with Lotus and Crane',
    date: '770 BCE to 256 BCE',
    period: 'Eastern Zhou Period',
    medium: 'Bronze',
    maker: 'Eastern Zhou culture',
    importance: 'Marks the shift from rigid Shang bronzes to lively Eastern Zhou design; also tied to lost-wax casting and foreign influence.',
  },
  {
    id: 9,
    title: 'Bianhu vessel, bronze inlaid with silver',
    date: 'Warring States 400 - 300 BCE',
    period: '',
    medium: 'Bronze with silver',
    maker: 'Eastern Zhou dynasty',
    importance: 'Shows advanced inlay technique; flattened shape, not raised texture, but still geometric designs and animals.',
  },
  {
    id: 10,
    title: 'Bell set of Marquis Yi of Zeng',
    date: '433 BCE',
    period: 'Warring States period',
    medium: 'Bronze bells with lacquered wood frame',
    maker: 'Zeng state',
    importance: 'Earliest physical evidence of a sophisticated 12-tone system; links music, inscriptions, and elite ritual.',
  },
  {
    id: 11,
    title: 'Baihuatan Hu with narrative scenes (ritual wine vessel decoration)',
    date: 'Warring States 480 - 222 BCE',
    period: '',
    medium: 'Bronze (represented as an ink rubbing pattern)',
    maker: 'Eastern Zhou dynasty',
    importance: 'Shows the move from abstract animal motifs to scenes of daily life, ritual, and warfare.',
  },
  {
    id: 12,
    title: 'Sketch of Reconstructed Tomb showing lining of pit, tomb chamber and tripple coffin',
    date: 'Western Han 168 BCE',
    period: '',
    medium: 'educational drawing of tomb made from cypress wood planks surrounded by thick layers of charcoal and white kaolin clay',
    maker: 'Western Han Dynasty Mawangdui Tomb, ancient China',
    importance: 'advanced Han dynasty tomb engineering that created sealed environment for near perfect preservation',
  },
  {
    id: 13,
    title: 'Terracotta warrior and horse (from the tomb of the First Emperor, Qin Shihuangdi)',
    date: '210 BCE',
    period: 'Qin dynasty',
    medium: 'Terracotta (fired clay)',
    maker: 'Qin dynasty',
    importance: 'Reflects the Qin shift from chariot warfare to mobile cavalry and projects imperial military power into the afterlife.',
  },
  {
    id: 14,
    title: 'Kneeling Archer (Terracotta Army)',
    date: '221–206 BCE',
    period: 'Qin dynasty',
    medium: 'Terracotta with painted decoration (original pigments mostly lost)',
    maker: 'Commissioned by Qin Shi Huang, constructed by conscripted laborers and skilled artisans of Qin Dynasty',
    importance: 'Highlights organized Qin military tactics, especially alternating firing rows for continuous attack.',
  },
  {
    id: 15,
    title: 'Dogū (female figurine), Gunma',
    date: '1000–400 BCE',
    period: 'Late/Final Jōmon period',
    medium: 'Ceramic (earthenware)',
    maker: 'Jōmon culture',
    importance: 'Suggests a complex ritual life in prehistoric Japan, possibly tied to fertility, childbirth, or healing magic.',
  },
  {
    id: 16,
    title: 'Bronze chariot and horses (from the tomb of Qin Shi Huang)',
    date: '210 BCE',
    period: 'Qin dynasty',
    medium: 'Bronze with gold and silver inlay',
    maker: 'Commissioned by Qin Shi Huang, constructed by conscripted laborers and skilled artisans of Qin Dynasty, ancient China',
    importance: 'Shows complex bronze casting and mechanical engineering; reflects the emperor’s need for luxury transport after death.',
  },
  {
    id: 17,
    title: 'Han dynasty funerary figurines, Xian',
    date: '200-100 BCE',
    period: 'Western Han dynasty',
    medium: 'Terracotta',
    maker: 'Han dynasty, China',
    importance: 'Show a shift away from massive Qin tomb sculpture toward a more human-scale Han funerary world. Idea of terracotta tomb army spreading to other tombs. Individualistic unique faces.',
  },
  {
    id: 18,
    title: 'Haniwa warrior figure',
    date: '400-600 CE',
    period: 'Kofun period',
    medium: 'Ceramic',
    maker: 'Kofun, Japan',
    importance: 'Piecemeal construction, all using a coil method. Significant that it isn\'t a vessel.',
  },
  {
    id: 19,
    title: 'Flying Horse on a bird',
    date: '2nd century CE',
    period: 'Eastern Han dynasty',
    medium: 'Bronze',
    maker: 'eastern Han culture, China, tomb in Gansu',
    importance: 'Ability to capture movement, very dynamic',
  },
  {
    id: 20,
    title: 'TLV mirror',
    date: 'Eastern Han 100 – 200 CE',
    period: '',
    medium: 'Bronze',
    maker: 'Eastern Han dynasty',
    importance: 'Expresses Han cosmology through square earth, circular heavens, directional animals, and cosmic order.',
  },
  {
    id: 21,
    title: 'Lady Dai T shaped funeral silk banner',
    date: '200 BCE',
    period: 'Western Han dynasty',
    medium: 'Painted silk',
    maker: 'Han dynasty, China (Mawangdui tombs)',
    importance: 'Rare preserved silk banner mapping the afterlife in heavenly, earthly, and underworld zones.',
  },
  {
    id: 22,
    title: 'The Nymph of the Luo River',
    date: '4th century CE',
    period: 'Eastern Jin dynasty',
    medium: 'Ink and color on silk',
    maker: 'Gu Kaizhi',
    importance: 'Early elite figure painting tied to refined storytelling, emotion, and beauty described through nature.',
  },
  {
    id: 23,
    title: 'Sarcophagus relief with hunting scene',
    date: '520 CE',
    period: 'Northern Wei dynasty',
    medium: 'Stone relief',
    maker: 'Northern Wei dynasty, China',
    importance: 'Uses funerary narrative to teach Confucian filial piety.',
  },
  {
    id: 24,
    title: 'Buddha with attendant, Yungang Grottoes, cave 20',
    date: '470–480 CE',
    period: 'Northern Wei dynasty',
    medium: 'Sandstone',
    maker: 'Northern Wei dynasty, China',
    importance: 'Early monumental Buddhist cave sculpture in China; shows Central Asian and Gandharan influence coming through the Silk Road.',
  },
  {
    id: 25,
    title: 'Nine-Colored Deer mural (Mogao Caves, Dunhuang)',
    date: 'Northern Wei 386–534 CE',
    period: '',
    medium: 'Mural / wall painting (pigment on plaster)',
    maker: 'Northern Wei dynasty(Dunhuang)',
    importance: 'Buddhist narrative painting from Dunhuang; teaches karma and moral behavior through storytelling.',
  },
  {
    id: 26,
    title: 'Gilt-bronze Incense Burner of Baekje',
    date: '600–700 CE',
    period: 'Three Kingdoms period',
    medium: 'Bronze',
    maker: 'Baekje kingdom, Korea',
    importance: 'Sacred mountain form with dragon base and phoenix lid; mixes Daoist cosmology, Buddhist imagery, and Korean metalworking skill.',
  },
  {
    id: 27,
    title: 'Silla Gold Crown, from a royal tomb at Gyeongju',
    date: 'Three Kingdoms period 500 - 600 CE',
    period: '',
    medium: 'Gold with jade pendants (gogok)',
    maker: 'Silla kingdom, Korea',
    importance: 'Shows royal authority, steppe and shamanistic influence, and wide Eurasian exchange.',
  },
  {
    id: 28,
    title: 'Seven Sages of the Bamboo Grove, Nanjing China',
    date: '400 CE',
    period: 'Southern Dynasties period',
    medium: 'Molded brick',
    maker: 'Southern Dynasties, China',
    importance: 'Celebrates reclusion, spontaneity, and Daoist-style withdrawal from court life.',
  },
  {
    id: 29,
    title: 'Horse and groom relief, Tomb of Emperor Taizong',
    date: 'Tang 636 - 649 CE',
    period: '',
    medium: 'Stone relief',
    maker: 'Court sculptors under Emperor Taizong',
    importance: 'This relief is one of the famous Six Steeds of Emperor Taizong, commemorating the horses that helped him secure victory in battles leading to the founding of the Tang dynasty.',
  },
  {
    id: 30,
    title: 'Buddha Statue, Longmen Grottoes, Empress Wu',
    date: '675 CE',
    period: 'Tang dynasty',
    medium: 'Limestone (rock-cut sculpture)',
    maker: 'Tang dynasty China, imperial Buddhist sculptors under Empress Wu Zetian',
    importance: 'Mature Tang Buddhist sculpture with stronger modeling; also tied to Wu Zetian’s political legitimacy.',
  },
  {
    id: 31,
    title: 'Seated Buddha, Seokguram Grotto, Gyeongju',
    date: '751 CE',
    period: 'Unified Silla period',
    medium: 'Granite',
    maker: 'Unified Silla kingdom, Korea',
    importance: 'Masterpiece of Unified Silla Buddhist art showing strong technical control in granite.',
  },
  {
    id: 32,
    title: 'Night-Shining White',
    date: '750 CE',
    period: 'Tang dynasty',
    medium: 'Ink and color on paper',
    maker: 'Han Gan, China',
    importance: 'Famous Tang horse painting; reflects horses as symbols of power, status, and Central Asian contact.',
  },
  {
    id: 33,
    title: "Mural of Officials Greeting Foreign Envoys (Korean), Tomb of Prince Li Xian",
    date: '706 CE',
    period: 'Tang dynasty',
    medium: 'Wall painting / mural with pigments on plaster',
    maker: 'Tang dynasty, China',
    importance: 'Shows the cosmopolitan Tang court and diplomatic exchange along the Silk Road.',
  },
  {
    id: 34,
    title: 'Lady under a tree, Shosoin',
    date: 'Nara 750 CE',
    period: '',
    medium: 'Ink and color on paper',
    maker: 'Japanese artist during the nara period',
    importance: 'Japanese made, imitating Chinese paintings, Tang woman, Tang beauty.',
  },
  {
    id: 35,
    title: 'Sogdian Brocaded Silk Banner Lion Hunting',
    date: 'Tang Dynasty 700 CE',
    period: '',
    medium: 'Sogdian Brocaded Silk',
    maker: 'Made in china, Sogdian',
    importance: 'Gift from China to Japan. Shows luxury motifs traveling across East Asia through trade, migration, and adaptation.',
  },
  {
    id: 36,
    title: 'Shaka Triad, Horyuji',
    date: 'Asuka 623 CE',
    period: '',
    medium: 'Bronze',
    maker: 'Tori Busshi, Asuka-period Japan',
    importance: 'Shows the early establishment of Buddhism in Japan through Korean and Chinese influence.',
  },
  {
    id: 37,
    title: 'Hungry Tigress Jataka',
    date: 'Asuka 650 CE',
    period: '',
    medium: 'Lacquer and pigment on wood',
    maker: 'Hōryūji Buddhist temple workshop',
    importance: 'Shows one of the earliest Buddhist narrative paintings in Japan and broader East Asian artistic exchange.',
  },
  {
    id: 38,
    title: 'Xiao Xiang Rivers',
    date: '10th century 5 dynastyies period',
    period: '',
    medium: 'hand scroll, ink and light color on silk',
    maker: 'Dong Yuan',
    importance: 'Dong Yuan is famous for southern china landscapes. southern paintings are more hilly and flat water as opposed to mountaits being tall pointy, more vertical. these are more round, soft, long, meant to be slowly unrolled.',
  },
  {
    id: 39,
    title: 'Walking on a Mountain Path in Spring',
    date: '12th-13th century, Southern Song Dynasty',
    period: '',
    medium: 'ink and color on silk',
    maker: 'Ma Yuan',
    importance: 'Shows Ma Yuan’s “one-corner” composition, where the main figure, tree, and path are pushed to one side while the rest is left open and atmospheric. The painting creates a quiet poetic mood and shows the Southern Song interest in intimate, lyrical landscapes rather than huge monumental mountains. Looking at what? maybe the caligraphy. Trees are coming over head. Everything in the painting is leading the eye to the top right.',
  },
  {
    id: 40,
    title: 'Frolicking Animals',
    date: 'Heian Period Japan, 12th century',
    period: '',
    medium: 'Handscroll, ink on paper',
    maker: 'Unknown Japanese Artist',
    importance: 'Famous Japanese narrative handscroll showing animals acting like people. It is important for its playful satire, lively brushwork, and early use of sequential storytelling that is sometimes connected to later manga traditions. Frog is seated like a buddha. It is commical. Is it respectful?',
  },
  {
    id: 41,
    title: 'Cloudy Mountains',
    date: 'Southern Song dynasty, 12th-13th century',
    period: '',
    medium: 'Ink on paper',
    maker: 'Mi Youren',
    importance: 'Mi style. Uses cloudy/hazy dots to create his paintings.',
  },
  {
    id: 42,
    title: 'Night Attack on the Sanjo Palace',
    date: 'Kamakura period, 13th century',
    period: '',
    medium: 'Detail from a long handscroll, ink and color on paper',
    maker: 'Unknown Japanese artist',
    importance: 'Famous Japanese war tale painting; dramatic use of fire, crowd movement, and narrative action. Very gory piece. Incredible fire with layered colors and splatter.',
  },
  {
    id: 43,
    title: 'A Thousand Peaks and Myriad Ravines',
    date: 'Qing dynasty, mid 17th century',
    period: '',
    medium: 'Hanging scroll, ink on paper',
    maker: 'Gong Xian',
    importance: 'Shows Gong Xian’s dense, layered ink style, using repeated brushstrokes and dark ink buildup to create heavy mountains and deep space. It reflects early Qing individualist painting and a mood of withdrawal after the fall of the Ming dynasty where the Qing is trying to kill any remeianing Ming loyalists. Dark, moody piece. Hut in the center is the only human shape is surrounded by really opressive dark rocks. very little life. no birds, very little vegitation.',
  },
  {
    id: 44,
    title: 'Layered Icy Silk',
    date: 'Southern Song dynasty, 13th century',
    period: '',
    medium: 'Ink and color on silk',
    maker: 'Ma Lin',
    importance: 'Shows the Southern Song taste for delicate, poetic painting. The layered white blossoms are painted with fine detail and soft color, creating an elegant, quiet mood. It is also important because Ma Lin came from the Ma family of court painters, so it reflects the refined style of the Southern Song imperial academy. Branches almost look like caligraphy strokes. Branch is cropped and coming off from the side. Similar to one corner composition.',
  },
  {
    id: 45,
    title: '10,000 Ugly Ink-dots',
    date: '17th century, Qing dynasty',
    period: '',
    medium: 'handscroll, ink on paper',
    maker: 'Shi Tao',
    importance: 'Mixture of wet and dry brushwork to give the impression the artist is in progress. Irregular spacing between characters which matches the chaos of the painting.',
  },
  {
    id: 46,
    title: 'Dream Journey to the Peach Blossom Land',
    date: '15th century Joseon Dynasty, Korea',
    period: '',
    medium: 'color on silk',
    maker: 'An Gyeon',
    importance: 'Dreamt he goes to a wonderful hidden land of immortals and peaches and flowers. Escape from normal urban life.',
  },
  {
    id: 47,
    title: 'Irises at Yatsuhashi',
    date: 'Edo period Japan, early 1700s',
    period: '',
    medium: 'One half of a pair of 6 panneled folding screens',
    maker: 'Ogata Kōrin',
    importance: 'Famous Rinpa-style screen painting. Very geometic painting. Irises follow the shape of the bridge, arranged on harsh diagonals.',
  },
  {
    id: 48,
    title: 'Wood and Rock',
    date: 'Northern Song dynasty, 11th-12th century',
    period: '',
    medium: 'Handscroll, ink on paper',
    maker: 'Su Shi',
    importance: 'Su Shi was a poet and scholar. During his exile he explores new ways to convey his opinions without getting censored. Explores painting and self expresion.',
  },
  {
    id: 49,
    title: 'Immortal in Splashed Ink',
    date: 'Southern Song dynasty, 13th century',
    period: '',
    medium: 'Hanging scroll, ink on paper',
    maker: 'Liang Kai',
    importance: 'Shows the spontaneous “splashed ink” style associated with Chan/Zen painting. The figure is created with loose, quick brushwork rather than careful detail, which makes the immortal feel strange, humorous, and spiritually free. It is important because it shows how ink painting could express personality, enlightenment, and unconventional behavior. Bridging cultures and creating zen painting/munk painting.',
  },
  {
    id: 50,
    title: 'Six Persimmons',
    date: 'Southern Song dynasty, 13th century',
    period: '',
    medium: 'Hanging scroll, ink on paper',
    maker: 'Muqi Fachang',
    importance: 'Famous Chan Buddhist ink painting. The six fruits are extremely simple, but each one is slightly different in shape, tone, and brushwork. It is important because it turns an ordinary subject into a quiet meditation on emptiness, form, and subtle variation.',
  },
  {
    id: 51,
    title: 'Autumn Colors on the Qiao and Hua Mountains',
    date: 'Yuan dynasty, 13th century',
    period: '',
    medium: 'Handscroll, ink and color on paper',
    maker: 'Zhao Mengfu',
    importance: 'Important literati landscape painting made for a friend who had never seen his ancestral home near the Qiao and Hua mountains. It is not meant to be fully realistic; instead, Zhao uses intentionally old-fashioned forms, soft colors, and calligraphic brushwork to connect painting with memory, history, and personal meaning. paper is very important in any literati work',
  },
  {
    id: 52,
    title: 'Portrait of Minamoto no Yoritomo',
    date: 'Kamakura period, 13th century',
    period: '',
    medium: 'Hanging scroll, ink and color on silk',
    maker: 'Attributed to Takanobu',
    importance: 'Important example of Kamakura-period portraiture and the growing power of the warrior class in Japan. The portrait presents Yoritomo as a serious, controlled military leader, using realistic facial features, formal clothing, and a reserved pose to emphasize authority and status.Texture of the robes fabric is very well depicted, shows incredible skill.',
  },
  {
    id: 53,
    title: 'Water-Moon Avalokiteshvara',
    date: 'Goryeo dynasty, 14th century, korean',
    period: '',
    medium: 'Hanging scroll, ink, color, and gold on silk',
    maker: 'Unknown Korean Buddhist artist',
    importance: 'Important example of Goryeo Buddhist painting. Avalokiteshvara is shown as an elegant, compassionate bodhisattva, often seated near water and the moon, with delicate robes, jewelry, and gold details. It shows the luxury and refinement of Goryeo Buddhist art and the importance of devotional images for worship. Famous for depicting bright red',
  },
  {
    id: 54,
    title: 'Elegant Rocks and Sparse Trees',
    date: '13th-14th century, yuan dynasty',
    period: '',
    medium: 'Ink on Paper',
    maker: 'Zhao Mengfu',
    importance: 'redefine what painting looks like in relation to caligraphy. saw themselves as scholars first, not painters. literati painting. boring but calming to look at.',
  },
  {
    id: 55,
    title: 'Bakohan tea bowl',
    date: '13th century, Southern Song dynasty, China',
    period: '',
    medium: 'stoneware with a celadon glaze',
    maker: 'Longquan kiln, china',
    importance: 'Became one of the most famous imported Chinese tea bowls in Japan, admired for its celadon beauty and for the metal-clamp repair story that gave it the name “Bakōhan.”',
  },
  {
    id: 56,
    title: 'Statue of Asanga',
    date: 'Kamakura period, 1208',
    period: '',
    medium: 'Painted wood with inlaid crystal eyes',
    maker: 'Unkei',
    importance: 'Important Kamakura Buddhist sculpture showing the monk Asanga, one of the founders of Yogācāra Buddhism. Unkei makes him look highly realistic and individualized, with an aged face, heavy robes, and a strong physical presence. This reflects the Kamakura interest in realism, emotional intensity, and making Buddhist figures feel immediate and human.',
  },
  {
    id: 57,
    title: 'Dwelling in the Qingbian Mountains',
    date: 'Yuan dynasty, 14th century',
    period: '',
    medium: 'Hanging scroll, ink on paper',
    maker: 'Wang Meng',
    importance: 'Important Yuan literati landscape painting. Wang Meng uses dense, tangled brushwork and crowded mountain forms to create a restless, complex scene. It reflects literati values because the painting is less about realistic space and more about personal expression, brushwork, and the scholar’s retreat into nature during a politically unstable period.',
  },
  {
    id: 59,
    title: 'Dwelling in the Fuchun Mountains',
    date: '13th-14th century, Yuan dynasty',
    period: '',
    medium: 'Handscroll, ink on paper',
    maker: 'Huang Gongwang',
    importance: 'One of the most famous Chinese literati landscape paintings. It was made slowly over several years and meant to be viewed section by section as a handscroll. The painting emphasizes personal brushwork, quiet wandering through nature, and scholar-amateur values rather than realistic detail. It is also famous because it was later damaged by fire and split into two surviving sections.// might be a copy',
  },
  {
    id: 60,
    title: 'Hall of Jongmyo Shrine',
    date: 'Joseon dynasty, originally 1421; expanded later',
    period: '',
    medium: 'Wood architecture, royal ancestral shrine hall',
    maker: 'Joseon royal court, Korea',
    importance: 'Important Confucian ritual building used to house spirit tablets of Joseon kings and queens. Humble aesthetics, purely confuscion, humility and humbleness over imperial granduer',
  },
  {
    id: 61,
    title: 'Autumn and Winter Landscapes',
    date: 'Muromachi period, 15th century',
    period: '',
    medium: 'Pair of hanging scrolls, ink on paper',
    maker: 'Sesshu Toyo',
    importance: 'Important example of Japanese Zen ink landscape painting. Sesshū adapts Chinese Song and Yuan landscape styles but makes them more abstract and dramatic through strong brushwork, sharp forms, and empty space. The pair shows his ability to create seasonal mood with limited ink tones, especially the quiet, cold atmosphere of winter and the crisp structure of autumn.',
  },
  {
    id: 62,
    title: 'A Thousand Miles of Rivers and Mountains',
    date: 'early 12th century, Song dynasty',
    period: '',
    medium: 'Handscroll, ink and color on silk',
    maker: 'Wang Ximeng',
    importance: 'shows the grand, idealized vision of nature valued in Song dynasty court painting',
  },
  {
    id: 63,
    title: 'Celadon Incense Burner',
    date: 'Goryeo dynasty, 12th century',
    period: '',
    medium: 'Celadon-glazed stoneware',
    maker: 'Unknown Korean potter',
    importance: 'Important example of Goryeo celadon, which was admired for its soft green glaze and refined craftsmanship. The openwork ball on top allowed incense smoke to escape, while the lotus-shaped body and elegant glaze show the connection between luxury objects, Buddhist ritual, and elite Goryeo taste.',
  },
  {
    id: 64,
    title: 'Mount Fuji Tea Bowl',
    date: 'early 17th century, edo period',
    period: '',
    medium: 'Earthenware with glaze',
    maker: 'Honami Koetsu',
    importance: 'connecting with the mountain as you drink the tea',
  },
  {
    id: 65,
    title: 'Six Gentlemen',
    date: 'Yuan dynasty, 1345',
    period: '',
    medium: 'Hanging scroll, ink on paper',
    maker: 'Ni Zan',
    importance: 'Important Yuan literati landscape. The “six gentlemen” are the six trees in the painting, which can stand for upright scholarly character. The scene is very sparse, with empty water, simple trees, and distant mountains, showing Ni Zan’s values of restraint, purity, solitude, and personal brushwork rather than realistic detail.',
  },
  {
    id: 66,
    title: 'Huike Offering His Arm to Bodhidharma',
    date: 'Muromachi period, 1496',
    period: '',
    medium: 'Hanging scroll, ink on paper',
    maker: 'Sesshu Toyo',
    importance: 'Important Zen painting showing the dramatic story of Huike proving his dedication to Bodhidharma by cutting off his arm. Sesshū uses rough, expressive ink brushwork and a stark composition to emphasize spiritual intensity, discipline, and the direct transmission of Zen teaching.// outlining vs detail',
  },
  {
    id: 67,
    title: 'Embroidery of Flowers and Insects',
    date: 'Ming dynasty, 17th century',
    period: '',
    medium: 'Silk embroidery',
    maker: 'Han Ximeng',
    importance: 'Shows the refined flower-and-insect painting tradition associated with women artists in late imperial China. The careful details of the grasshopper, flowers, grasses, and rocks show close observation of nature, while the delicate brushwork and soft color create an elegant, intimate scene. Han Ximeng was known for album paintings of flowers and insects, and this type of work reflects both technical skill and literati taste.',
  },
  {
    id: 68,
    title: 'Early Spring',
    date: 'Northern Song Dynasty 1072',
    period: '',
    medium: 'Hanging scroll, ink and color on silk',
    maker: 'Guo Xi',
    importance: 'lots of curvs, shows movement in the mountains, landscape should have three distances (perspective), value of ink getting lighter in the distance also contributes to the depth. brushwork resembles ghost faces',
  },
  {
    id: 69,
    title: 'Orchid, Bamboo, and Rock',
    date: 'Qing Dynasty, mid 18th Century',
    period: '',
    medium: 'Hanging Scroll, ink and light color on paper',
    maker: 'Zheng Xie',
    importance: 'He used his painting as a silent political protest. Bamboos growing out of rocks symbolized literatus\'s resilience under corrupt power. He is the figure who made it possible for a serious literati painter to also be openly a professional, aka sell his work.',
  },
  {
    id: 70,
    title: 'Splashed Ink Landscape',
    date: 'Maromachi period, 1420-1506',
    period: '',
    medium: 'Hanging scoll, ink on paper',
    maker: 'Sesshu Toyo',
    importance: 'Important Japanese Zen ink painting. Uses loose “splashed ink” brushwork to suggest a landscape rather than describe it realistically, showing the importance of mood, spontaneity, and Japanese adaptation of Chinese ink painting.',
  },
  {
    id: 71,
    title: 'Elegant Gathering in the Apricot Garden',
    date: 'Ming dynasty, 15th century',
    period: '',
    medium: 'Hanging scroll, ink and color on paper',
    maker: 'Shen Zhou',
    importance: 'Shows a literati “elegant gathering,” where scholars come together to write poetry, paint, drink tea, and enjoy nature. The painting is important because it reflects Ming literati ideals of friendship, retreat, cultivation, and scholarly identity. Shen Zhou’s loose brushwork and quiet setting make the scene feel personal rather than official or courtly.',
  },
  {
    id: 72,
    title: 'Album of Mount Geumgang',
    date: 'Joseon dynasty, 18th century',
    period: '',
    medium: 'Album leaves, ink and light color on silk',
    maker: 'Jeong Seon',
    importance: 'Important example of Korean “true-view” landscape painting, where artists painted real Korean places instead of relying only on idealized Chinese models. Jeong Seon’s Mount Geumgang images show national pride, direct observation, and dramatic brushwork that captures the sharp peaks and famous scenery of the Diamond Mountains.',
  },
  {
    id: 73,
    title: 'Calligraphy of Anpyeong-daegun',
    date: 'Joseon dynasty, 19th century',
    period: '',
    medium: 'Ink on paper',
    maker: 'Prince Anpyeong',
    importance: 'Important example of Joseon royal calligraphy. Prince Anpyeong was a major patron and collector of the arts, and his calligraphy shows the elite Joseon interest in Chinese literati culture, especially expressive brushwork and scholarly refinement. The bold, flowing characters show calligraphy as an art form, not just writing.',
  },
  {
    id: 74,
    title: 'Mount Qingbian',
    date: 'Ming dynasty, 1617',
    period: '',
    medium: 'Hanging scroll, ink on paper',
    maker: 'Dong Qichang',
    importance: 'The painting doesn\'t make geological sense, and isnt accurate. He was rejecting representation as the goal of painting, and instead focusing on demonstrating brushwork',
  },
];
const IMAGE_MAP = {
  1: "assets/images/item_01.png",
  2: "assets/images/item_02.png",
  3: "assets/images/item_03.png",
  4: "assets/images/item_04.png",
  5: "assets/images/item_05.png",
  6: "assets/images/item_06.png",
  7: "assets/images/item_07.png",
  8: "assets/images/item_08.png",
  9: "assets/images/item_09.png",
  10: "assets/images/item_10.png",
  11: "assets/images/item_11.png",
  12: "assets/images/item_12.png",
  13: "assets/images/item_13.png",
  14: "assets/images/item_14.png",
  15: "assets/images/item_15.png",
  16: "assets/images/item_16.png",
  17: "assets/images/item_17.png",
  18: "assets/images/item_18.png",
  19: "assets/images/item_19.png",
  20: "assets/images/item_20.png",
  21: "assets/images/item_21.png",
  22: "assets/images/item_22.png",
  23: "assets/images/item_23.png",
  24: "assets/images/item_24.png",
  25: "assets/images/item_25.png",
  26: "assets/images/item_26.png",
  27: "assets/images/item_27.png",
  28: "assets/images/item_28.png",
  29: "assets/images/item_29.png",
  30: "assets/images/item_30.png",
  31: "assets/images/item_31.png",
  32: "assets/images/item_32.png",
  33: "assets/images/item_33.png",
  34: "assets/images/item_34.png",
  35: "assets/images/item_35.png",
  36: "assets/images/item_36.png",
  37: "assets/images/item_37.png",
  38: "assets/images/item_38.png",
  39: "assets/images/item_39.png",
  40: "assets/images/item_40.png",
  41: "assets/images/item_41.png",
  42: "assets/images/item_42.png",
  43: "assets/images/item_43.png",
  44: "assets/images/item_44.png",
  45: "assets/images/item_45.png",
  46: "assets/images/item_46.png",
  47: "assets/images/item_47.png",
  48: "assets/images/item_48.png",
  49: "assets/images/item_49.png",
  50: "assets/images/item_50.png",
  51: "assets/images/item_51.png",
  52: "assets/images/item_52.png",
  53: "assets/images/item_53.png",
  54: "assets/images/item_54.png",
  55: "assets/images/item_55.png",
  56: "assets/images/item_56.png",
  57: "assets/images/item_57.png",
  59: "assets/images/item_59.png",
  60: "assets/images/item_60.png",
  61: "assets/images/item_61.png",
  62: "assets/images/item_62.png",
  63: "assets/images/item_63.png",
  64: "assets/images/item_64.png",
  65: "assets/images/item_65.png",
  66: "assets/images/item_66.png",
  67: "assets/images/item_67.png",
  68: "assets/images/item_68.png",
  69: "assets/images/item_69.png",
  70: "assets/images/item_70.png",
  71: "assets/images/item_71.png",
  72: "assets/images/item_72.png",
  73: "assets/images/item_73.png",
  74: "assets/images/item_74.png",
};

const BASE_STUDY_ITEMS = STUDY_ITEMS.map((item) => ({ ...item }));
const STORAGE_KEY = "east-asian-midterm-review-progress-v1";
const CARD_DATA_KEY = "east-asian-midterm-review-cards-v1";
const CARD_IMAGE_KEY = "east-asian-midterm-review-images-v1";
const DECKS_KEY = "east-asian-midterm-review-decks-v1";
const DEFAULT_DECK_ID = "all-items";
const MIDTERM_DECK_ID = "midterm-set";
const FINAL_DECK_ID = "final-slides-set";
const DB_FILTER_ALL_ID = "db-filter-all";
const MIDTERM_ITEM_IDS = STUDY_ITEMS.filter((item) => item.id <= 37).map((item) => item.id);
const FINAL_ITEM_IDS = STUDY_ITEMS.filter((item) => item.id >= 38).map((item) => item.id);
const INTERVALS = [1, 2, 4, 8, 14, 30];
const CHECK_INTERVALS = [1, 3, 6, 10, 16, 22];
const CHECK_FAIL_MULTIPLIER = 0.5;
const FULL_CHECK_STREAK_THRESHOLD = 3;
const FULL_CHECK_MIN_ATTEMPTS = 4;
const MASTERY_BOX_THRESHOLD = 4;
const MAX_ACTIVE_LEARNING_CARDS = 10;
const FULL_CHECK_PASS_INTERVAL_MULTIPLIER = 6;
const TEACH_REPEAT_COOLDOWN_TURNS = 2;
const EDITABLE_CARD_FIELDS = ["title", "date", "period", "medium", "maker", "importance"];

const CHECK_FIELDS = [
  { key: "title", label: "Name / title" },
  { key: "periodDate", label: "Date and period" },
  { key: "medium", label: "Medium" },
  { key: "maker", label: "Culture / maker" },
  { key: "importance", label: "Importance" },
];

applySavedStudyItems();
applyContentCorrections();
const customImageMap = loadCustomImageMap();
let deckState = loadDeckState();
let state = loadState();
const teachState = {
  itemId: null,
  step: 0,
  checking: false,
  checkField: null,
  checkFields: [],
  checkDrafts: {},
  checkRevealed: false,
};
const flashState = { itemId: null, revealed: false };
const testState = {
  running: false,
  index: 0,
  itemIds: [],
  fieldKeys: [],
  imageSelection: "",
  drafts: {},
  revealed: false,
  correctCount: 0,
  wrongItemIds: [],
};
const quizState = { running: false, questions: [], index: 0, score: 0 };
const dbState = {
  itemId: STUDY_ITEMS[0] ? STUDY_ITEMS[0].id : null,
  editing: false,
  filterDeckId: DB_FILTER_ALL_ID,
};
let currentMode = "teach";

const modeButtons = Array.from(document.querySelectorAll(".mode-tab"));
const panels = {
  teach: document.getElementById("teach"),
  flash: document.getElementById("flash"),
  test: document.getElementById("test"),
  quiz: document.getElementById("quiz"),
  db: document.getElementById("db"),
};

const deckSelect = document.getElementById("deckSelect");
const deckSummary = document.getElementById("deckSummary");

const masteryBar = document.getElementById("masteryBar");
const masteryText = document.getElementById("masteryText");
const ringText = document.getElementById("ringText");
const ringProgress = document.getElementById("ringProgress");
const dueText = document.getElementById("dueText");
const dueSoonText = document.getElementById("dueSoonText");
const sessionInfo = document.getElementById("sessionInfo");
const teachCheck = document.getElementById("teachCheck");
const teachCheckPrompt = document.getElementById("teachCheckPrompt");
const teachCheckFields = document.getElementById("teachCheckFields");
const teachCheckReveal = document.getElementById("teachCheckReveal");
const teachCheckAnswer = document.getElementById("teachCheckAnswer");

const teachTitle = document.getElementById("teachTitle");
const teachHint = document.getElementById("teachHint");
const teachFacts = document.getElementById("teachFacts");
const teachReveal = document.getElementById("teachReveal");
const teachControls = document.getElementById("teachControls");
const teachRating = document.getElementById("teachRating");

const flashSub = document.getElementById("flashSub");
const flashBrowse = document.getElementById("flashBrowse");
const flashPrev = document.getElementById("flashPrev");
const flashNext = document.getElementById("flashNext");
const flashIndex = document.getElementById("flashIndex");
const flashViewerFlip = document.getElementById("flashViewerFlip");
const flashViewerInner = document.getElementById("flashViewerInner");
const flashViewerImage = document.getElementById("flashViewerImage");
const flashViewerTitle = document.getElementById("flashViewerTitle");
const flashViewerFacts = document.getElementById("flashViewerFacts");
const teachImage = document.getElementById("teachImage");

const testFieldOptions = document.getElementById("testFieldOptions");
const testStart = document.getElementById("testStart");
const testReset = document.getElementById("testReset");
const testSetupStatus = document.getElementById("testSetupStatus");
const testRun = document.getElementById("testRun");
const testProgress = document.getElementById("testProgress");
const testImage = document.getElementById("testImage");
const testPrompt = document.getElementById("testPrompt");
const testInputs = document.getElementById("testInputs");
const testReveal = document.getElementById("testReveal");
const testAnswer = document.getElementById("testAnswer");
const testFail = document.getElementById("testFail");
const testPass = document.getElementById("testPass");
const testStatus = document.getElementById("testStatus");
const testImageNumbers = document.getElementById("testImageNumbers");
const testWrongReview = document.getElementById("testWrongReview");
const testWrongSummary = document.getElementById("testWrongSummary");
const testRetryWrong = document.getElementById("testRetryWrong");

const quizIntro = document.getElementById("quizIntro");
const startQuiz = document.getElementById("startQuiz");
const quizContent = document.getElementById("quizContent");
const quizProgressText = document.getElementById("quizProgressText");
const quizBar = document.getElementById("quizBar");
const quizQuestion = document.getElementById("quizQuestion");
const quizChoices = document.getElementById("quizChoices");
const quizFeedback = document.getElementById("quizFeedback");
const quizNext = document.getElementById("quizNext");
const quizResult = document.getElementById("quizResult");
const quizImage = document.getElementById("quizImage");

const dbBrowse = document.getElementById("dbBrowse");
const dbEditor = document.getElementById("dbEditor");
const dbEditingLabel = document.getElementById("dbEditingLabel");
const dbImage = document.getElementById("dbImage");
const dbStatus = document.getElementById("dbStatus");
const dbTitle = document.getElementById("dbTitle");
const dbPeriodDate = document.getElementById("dbPeriodDate");
const dbMaker = document.getElementById("dbMaker");
const dbMedium = document.getElementById("dbMedium");
const dbImportance = document.getElementById("dbImportance");
const dbSave = document.getElementById("dbSave");
const dbReset = document.getElementById("dbReset");
const dbCancelEdit = document.getElementById("dbCancelEdit");
const dbDropzone = document.getElementById("dbDropzone");
const dbImageInput = document.getElementById("dbImageInput");
const dbPickImage = document.getElementById("dbPickImage");
const dbResetImage = document.getElementById("dbResetImage");
const dbDeckName = document.getElementById("dbDeckName");
const dbFilterDeck = document.getElementById("dbFilterDeck");
const dbCreateDeck = document.getElementById("dbCreateDeck");
const dbRenameDeck = document.getElementById("dbRenameDeck");
const dbDeleteDeck = document.getElementById("dbDeleteDeck");
const dbDeckStatus = document.getElementById("dbDeckStatus");

const FLASH_THUMB_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
const FLASH_THUMB_MAX_SIDE = 240;
const flashThumbCache = {};
const flashThumbPromiseCache = {};
let flashThumbObserver = null;

function buildDefaultCardState() {
  return {
    box: 1,
    nextDue: 1,
    attempts: 0,
    correct: 0,
    score: 0,
    lastSeenTurn: -1,
    checkDue: Number.MAX_SAFE_INTEGER,
    checkStreak: 0,
    nextCheckFieldIndex: 0,
    singleCheckSeenKeys: [],
    singleCheckPassedKeys: [],
    revealedOnce: false,
    teachMastered: false,
    taught: false,
  };
}

function sanitizeDeckItemIds(itemIds) {
  const source = Array.isArray(itemIds) ? itemIds : [];
  const validIds = new Set(STUDY_ITEMS.map((item) => item.id));
  const unique = [];
  source.forEach((itemId) => {
    if (!Number.isFinite(itemId) || !validIds.has(itemId) || unique.includes(itemId)) return;
    unique.push(itemId);
  });
  return unique;
}

function buildDefaultDeckState() {
  return {
    currentDeckId: DEFAULT_DECK_ID,
    decks: [],
  };
}

function loadDeckState() {
  try {
    const raw = localStorage.getItem(DECKS_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    const base = buildDefaultDeckState();
    if (!parsed || typeof parsed !== "object") return base;

    const decks = Array.isArray(parsed.decks) ? parsed.decks : [];
    const cleaned = [];
    const lockedDeckIds = new Set([DEFAULT_DECK_ID, MIDTERM_DECK_ID, FINAL_DECK_ID]);
    decks.forEach((deck, index) => {
      if (!deck || typeof deck !== "object") return;
      const id = typeof deck.id === "string" && deck.id.trim() ? deck.id.trim() : `deck-${index + 1}`;
      if (lockedDeckIds.has(id) || cleaned.some((entry) => entry.id === id)) return;
      const name = typeof deck.name === "string" && deck.name.trim() ? deck.name.trim() : `Deck ${cleaned.length + 1}`;
      cleaned.push({
        id,
        name,
        itemIds: sanitizeDeckItemIds(deck.itemIds),
      });
    });

    return {
      currentDeckId: typeof parsed.currentDeckId === "string" ? parsed.currentDeckId : DEFAULT_DECK_ID,
      decks: cleaned,
    };
  } catch (err) {
    console.warn("Could not restore saved decks.", err);
    return buildDefaultDeckState();
  }
}

function saveDeckState() {
  try {
    localStorage.setItem(DECKS_KEY, JSON.stringify(deckState));
    return true;
  } catch (err) {
    console.warn("Could not save decks.", err);
    return false;
  }
}

function getAllItemIds() {
  return STUDY_ITEMS.map((item) => item.id);
}

function getAllStudyItems() {
  return STUDY_ITEMS.slice();
}

function getDecks() {
  return [
    {
      id: DEFAULT_DECK_ID,
      name: "All cards",
      itemIds: getAllItemIds(),
      locked: true,
    },
    {
      id: MIDTERM_DECK_ID,
      name: "Midterm set",
      itemIds: MIDTERM_ITEM_IDS,
      locked: true,
    },
    {
      id: FINAL_DECK_ID,
      name: "Final slides",
      itemIds: FINAL_ITEM_IDS,
      locked: true,
    },
    ...deckState.decks.map((deck) => ({
      ...deck,
      itemIds: sanitizeDeckItemIds(deck.itemIds),
      locked: false,
    })),
  ];
}

function getDeckById(deckId) {
  return getDecks().find((deck) => deck.id === deckId) || null;
}

function getActiveDeck() {
  return getDeckById(deckState.currentDeckId) || getDeckById(DEFAULT_DECK_ID);
}

function isValidDbFilterDeckId(deckId) {
  return deckId === DB_FILTER_ALL_ID || Boolean(getDeckById(deckId));
}

function ensureDbFilterStateValidity() {
  if (!isValidDbFilterDeckId(dbState.filterDeckId)) {
    dbState.filterDeckId = DB_FILTER_ALL_ID;
  }
}

function getDbFilterDeck() {
  ensureDbFilterStateValidity();
  return dbState.filterDeckId === DB_FILTER_ALL_ID ? null : getDeckById(dbState.filterDeckId);
}

function getDbBrowseItems() {
  const filterDeck = getDbFilterDeck();
  if (!filterDeck) return getAllStudyItems();
  const idSet = new Set(filterDeck.itemIds);
  return STUDY_ITEMS.filter((item) => idSet.has(item.id));
}

function getActiveDeckItemIds() {
  const activeDeck = getActiveDeck();
  return activeDeck ? activeDeck.itemIds.slice() : [];
}

function getActiveDeckItems() {
  const idSet = new Set(getActiveDeckItemIds());
  return STUDY_ITEMS.filter((item) => idSet.has(item.id));
}

function isValidAnyItemId(itemId) {
  return Number.isFinite(itemId) && STUDY_ITEMS.some((item) => item.id === itemId);
}

function isItemInActiveDeck(itemId) {
  return getActiveDeckItemIds().includes(itemId);
}

function ensureDeckStateValidity() {
  const validDeckIds = new Set(getDecks().map((deck) => deck.id));
  if (!validDeckIds.has(deckState.currentDeckId)) {
    deckState.currentDeckId = DEFAULT_DECK_ID;
  }
}

function makeDeckId(name) {
  const slug = String(name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32) || "deck";
  let candidate = `deck-${slug}`;
  let counter = 2;
  const used = new Set(getDecks().map((deck) => deck.id));
  while (used.has(candidate)) {
    candidate = `deck-${slug}-${counter}`;
    counter += 1;
  }
  return candidate;
}

function getItemImage(itemId) {
  if (customImageMap[itemId]) return customImageMap[itemId];
  return IMAGE_MAP[itemId] || "assets/images/item_01.png";
}

function getPeriodAndDate(item) {
  const date = item.date ? String(item.date).trim() : "";
  const period = item.period ? String(item.period).trim() : "";

  if (date && period) return `${date}, ${period}`;
  return date || period;
}

function splitPeriodAndDate(value) {
  const text = value ? String(value).trim() : "";
  if (!text) return { date: "", period: "" };

  const parts = text.split(",").map((part) => part.trim()).filter(Boolean);
  if (parts.length > 1) {
    return {
      date: parts[0],
      period: parts.slice(1).join(", "),
    };
  }

  return { date: text, period: "" };
}

function renderDeckPicker() {
  ensureDeckStateValidity();
  ensureDbFilterStateValidity();
  const decks = getDecks();
  const activeDeck = getActiveDeck();
  if (deckSelect) {
    deckSelect.innerHTML = "";
    decks.forEach((deck) => {
      const option = document.createElement("option");
      option.value = deck.id;
      option.textContent = `${deck.name} (${deck.itemIds.length})`;
      option.selected = deck.id === activeDeck.id;
      deckSelect.appendChild(option);
    });
  }
  if (dbFilterDeck) {
    dbFilterDeck.innerHTML = "";
    const allOption = document.createElement("option");
    allOption.value = DB_FILTER_ALL_ID;
    allOption.textContent = `All cards (${STUDY_ITEMS.length})`;
    dbFilterDeck.appendChild(allOption);
    decks.forEach((deck) => {
      const option = document.createElement("option");
      option.value = deck.id;
      option.textContent = `${deck.name} (${deck.itemIds.length})`;
      dbFilterDeck.appendChild(option);
    });
    dbFilterDeck.value = dbState.filterDeckId;
  }
  if (deckSummary) {
    const count = activeDeck.itemIds.length;
    deckSummary.textContent = count
      ? `${activeDeck.name} is active across teaching mode, flashcards, custom tests, and progress tracking. ${count} cards included.`
      : `${activeDeck.name} is active, but it does not contain any cards yet. Add cards to this deck in the database tab.`;
  }
  if (dbDeckName) {
    dbDeckName.value = activeDeck.locked ? "" : activeDeck.name;
  }
  if (dbRenameDeck) {
    dbRenameDeck.disabled = Boolean(activeDeck.locked);
  }
  if (dbDeleteDeck) {
    dbDeleteDeck.disabled = Boolean(activeDeck.locked);
  }
  if (dbDeckStatus && !dbDeckStatus.textContent) {
    dbDeckStatus.textContent = activeDeck.locked
      ? 'All cards is active. Create a new deck to manage deck membership.'
      : `Selected deck: ${activeDeck.name} (${activeDeck.itemIds.length} cards).`;
  }
}

function clearTeachSession() {
  teachState.itemId = null;
  teachState.step = 0;
  teachState.checking = false;
  teachState.checkField = null;
  teachState.checkFields = [];
  teachState.checkDrafts = {};
  teachState.checkRevealed = false;
}

function clearTestSession(message = "") {
  testState.running = false;
  testState.index = 0;
  testState.itemIds = getActiveDeckItemIds();
  testState.drafts = {};
  testState.revealed = false;
  testState.correctCount = 0;
  testState.wrongItemIds = [];
  if (testSetupStatus) testSetupStatus.textContent = message;
}

function syncStateToActiveDeck() {
  const activeIds = new Set(getActiveDeckItemIds());

  if (!activeIds.size) {
    clearTeachSession();
    flashState.itemId = null;
    flashState.revealed = false;
    clearTestSession("");
    if (dbState.editing && !isValidAnyItemId(dbState.itemId)) {
      dbState.editing = false;
    }
    return;
  }

  if (!activeIds.has(teachState.itemId)) {
    clearTeachSession();
  }

  if (!activeIds.has(flashState.itemId)) {
    flashState.itemId = getActiveDeckItemIds()[0] || null;
    flashState.revealed = false;
  }

  testState.itemIds = sanitizeTestItemIds(testState.itemIds).filter((itemId) => activeIds.has(itemId));
  if (!testState.itemIds.length) {
    testState.itemIds = getActiveDeckItemIds();
  }
  if (testState.running && (!testState.itemIds.length || testState.index >= testState.itemIds.length)) {
    clearTestSession("");
  }
}

function switchDeck(deckId) {
  const nextDeck = getDeckById(deckId);
  if (!nextDeck) return;
  deckState.currentDeckId = nextDeck.id;
  if (dbDeckStatus) dbDeckStatus.textContent = "";
  testState.imageSelection = "";
  clearTestSession("Switched decks. Start a new test for this deck.");
  syncStateToActiveDeck();
  renderDbEditor();
  refreshProgress();

  if (currentMode === "teach") {
    startTeachSession(true);
  } else if (currentMode === "flash") {
    startFlashSession();
  } else if (currentMode === "test") {
    startCustomTestMode();
  }

  saveDeckState();
  saveState();
}

function createDeckFromInput() {
  const name = dbDeckName ? dbDeckName.value.trim() : "";
  if (!name) {
    if (dbDeckStatus) dbDeckStatus.textContent = "Enter a name for the new deck.";
    return;
  }
  const deck = {
    id: makeDeckId(name),
    name,
    itemIds: [],
  };
  deckState.decks.push(deck);
  deckState.currentDeckId = deck.id;
  switchDeck(deck.id);
  if (dbDeckStatus) dbDeckStatus.textContent = `Created deck "${name}".`;
}

function renameActiveDeck() {
  const activeDeck = getActiveDeck();
  if (!activeDeck || activeDeck.locked) return;
  const name = dbDeckName ? dbDeckName.value.trim() : "";
  if (!name) {
    if (dbDeckStatus) dbDeckStatus.textContent = "Enter a new name before renaming this deck.";
    return;
  }
  const target = deckState.decks.find((deck) => deck.id === activeDeck.id);
  if (!target) return;
  target.name = name;
  if (dbDeckStatus) dbDeckStatus.textContent = `Renamed deck to "${name}".`;
  renderDeckPicker();
  renderDbBrowseList();
  saveDeckState();
}

function deleteActiveDeck() {
  const activeDeck = getActiveDeck();
  if (!activeDeck || activeDeck.locked) return;
  const deletedName = activeDeck.name;
  deckState.decks = deckState.decks.filter((deck) => deck.id !== activeDeck.id);
  deckState.currentDeckId = DEFAULT_DECK_ID;
  if (dbState.filterDeckId === activeDeck.id) {
    dbState.filterDeckId = DB_FILTER_ALL_ID;
  }
  switchDeck(DEFAULT_DECK_ID);
  if (dbDeckStatus) dbDeckStatus.textContent = `Deleted deck "${deletedName}".`;
}

function toggleItemInActiveDeck(itemId) {
  const activeDeck = getActiveDeck();
  if (!activeDeck || activeDeck.locked || !isValidAnyItemId(itemId)) return;
  const target = deckState.decks.find((deck) => deck.id === activeDeck.id);
  if (!target) return;
  if (target.itemIds.includes(itemId)) {
    target.itemIds = target.itemIds.filter((entry) => entry !== itemId);
    if (dbDeckStatus) dbDeckStatus.textContent = `Removed card ${itemId} from "${activeDeck.name}".`;
  } else {
    target.itemIds = sanitizeDeckItemIds([...target.itemIds, itemId]);
    if (dbDeckStatus) dbDeckStatus.textContent = `Added card ${itemId} to "${activeDeck.name}".`;
  }
  syncStateToActiveDeck();
  renderDeckPicker();
  renderDbBrowseList();
  if (currentMode === "teach") renderTeachCard();
  if (currentMode === "flash") renderFlashViewer();
  if (currentMode === "test") renderCustomTestMode();
  refreshProgress();
  saveDeckState();
  saveState();
}

function applySavedStudyItems() {
  try {
    const raw = localStorage.getItem(CARD_DATA_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (!Array.isArray(parsed)) return;

    const byId = new Map(parsed.map((item) => [item.id, item]));
    STUDY_ITEMS.forEach((item) => {
      const saved = byId.get(item.id);
      if (!saved || typeof saved !== "object") return;
      EDITABLE_CARD_FIELDS.forEach((field) => {
        if (typeof saved[field] === "string") {
          item[field] = saved[field];
        }
      });
    });
  } catch (err) {
    console.warn("Could not restore saved card edits.", err);
  }
}

function applyContentCorrections() {
  const baihuatan = STUDY_ITEMS.find((item) => item.id === 11);
  if (baihuatan && baihuatan.medium === "Bronze with inlay (silver and copper)") {
    baihuatan.medium = "Bronze (represented as an ink rubbing pattern)";
  }
  const marquisTomb = STUDY_ITEMS.find((item) => item.id === 12);
  if (marquisTomb && marquisTomb.title === "Tomb of Marquis Yi of Zeng (tomb complex reconstruction)") {
    marquisTomb.title = "Sketch of Reconstructed Tomb showing lining of pit, tomb chamber and tripple coffin";
  }
  if (marquisTomb && marquisTomb.date === "433 BCE") {
    marquisTomb.date = "Western Han 168 BCE";
  }
  if (marquisTomb && marquisTomb.period === "Warring States period") {
    marquisTomb.period = "";
  }
  if (marquisTomb && marquisTomb.maker === "Western Han Dynasty") {
    marquisTomb.maker = "Western Han Dynasty Mawangdui Tomb, ancient China";
  }
  if (marquisTomb && marquisTomb.medium === "Wood, lacquer, bronze grave goods (tomb architecture and burial objects)") {
    marquisTomb.medium = "educational drawing of tomb made from cypress wood planks surrounded by thick layers of charcoal and white kaolin clay";
  }
  if (marquisTomb && marquisTomb.importance === "Shows elaborate tomb engineering and the creation of a sealed burial environment filled with elite objects.") {
    marquisTomb.importance = "advanced Han dynasty tomb engineering that created sealed environment for near perfect preservation";
  }
  const bianhu = STUDY_ITEMS.find((item) => item.id === 9);
  if (bianhu && bianhu.title === "Bianhu flask, bronze inlaid with silver") {
    bianhu.title = "Bianhu vessel, bronze inlaid with silver";
  }
  if (bianhu && bianhu.importance === "Shows advanced inlay technique; flattened shape may imitate nomadic leather water skins.") {
    bianhu.importance = "Shows advanced inlay technique; flattened shape, not raised texture, but still geometric designs and animals.";
  }
  const bellSet = STUDY_ITEMS.find((item) => item.id === 10);
  if (bellSet && bellSet.title === "Bianzhong (bell set of Marquis Yi of Zeng)") {
    bellSet.title = "Bell set of Marquis Yi of Zeng";
  }
  const hanFigurines = STUDY_ITEMS.find((item) => item.id === 17);
  if (hanFigurines && hanFigurines.title === "Han Dynasty Yangling terracotta tomb attendants of Emperor Jing’s tomb") {
    hanFigurines.title = "Han dynasty funerary figurines, Xian";
  }
  if (hanFigurines && hanFigurines.date === "141–87 BCE") {
    hanFigurines.date = "200-100 BCE";
  }
  if (hanFigurines && hanFigurines.medium === "Terracotta (painted clay, clothing originally added separately)") {
    hanFigurines.medium = "Terracotta";
  }
  if (hanFigurines && hanFigurines.importance === "Show a shift away from massive Qin tomb sculpture toward a more human-scale Han funerary world.") {
    hanFigurines.importance = "Show a shift away from massive Qin tomb sculpture toward a more human-scale Han funerary world. Idea of terracotta tomb army spreading to other tombs. Individualistic unique faces.";
  }
  const haniwa = STUDY_ITEMS.find((item) => item.id === 18);
  if (haniwa && haniwa.date === "6th century CE") {
    haniwa.date = "400-600 CE";
  }
  if (haniwa && haniwa.medium === "Ceramic (earthenware)") {
    haniwa.medium = "Ceramic";
  }
  if (haniwa && haniwa.maker === "Japan") {
    haniwa.maker = "Kofun, Japan";
  }
  if (haniwa && haniwa.importance === "Realistically detailed kofun tomb sculpture; shows militarization and elite burial practice in early Japan.") {
    haniwa.importance = "Piecemeal construction, all using a coil method. Significant that it isn't a vessel.";
  }
  const flyingHorse = STUDY_ITEMS.find((item) => item.id === 19);
  if (flyingHorse && flyingHorse.title === "Flying Horse of Gansu") {
    flyingHorse.title = "Flying Horse on a bird";
  }
  if (flyingHorse && flyingHorse.maker === "Han dynasty, China") {
    flyingHorse.maker = "eastern Han culture, China, tomb in Gansu";
  }
  if (flyingHorse && flyingHorse.importance === "Famous for dynamic balance and vivid animal portraiture; tied in the sheet to the “heavenly horse.”") {
    flyingHorse.importance = "Ability to capture movement, very dynamic";
  }
  const yungang = STUDY_ITEMS.find((item) => item.id === 24);
  if (yungang && (yungang.title === "Colossal Buddha with attendant, Yungang Grottoes" || yungang.title === "Shakyamuni Buddha with attendant, Yungang Grottoes")) {
    yungang.title = "Buddha with attendant, Yungang Grottoes, cave 20";
  }
  if (yungang && yungang.medium === "Sandstone (rock-cut sculpture)") {
    yungang.medium = "Sandstone";
  }
  const sevenSages = STUDY_ITEMS.find((item) => item.id === 28);
  if (sevenSages && sevenSages.title === "Seven Sages of the Bamboo Grove (with Rong Qiqi)") {
    sevenSages.title = "Seven Sages of the Bamboo Grove, Nanjing China";
  }
  if (sevenSages && sevenSages.date === "5th century CE") {
    sevenSages.date = "400 CE";
  }
  if (sevenSages && sevenSages.medium === "Drawing and rubbing of brick mural relief") {
    sevenSages.medium = "Molded brick";
  }
  const horseRelief = STUDY_ITEMS.find((item) => item.id === 29);
  if (horseRelief && (horseRelief.title === "Horse and groom relief (Northern Wei tomb relief)" || horseRelief.title === "Stone relief of a horse from the Six Steeds of Zhao Mausoleum (Zhaoling), tomb of Emperor Taizong.")) {
    horseRelief.title = "Horse and groom relief, Tomb of Emperor Taizong";
  }
  if (horseRelief && horseRelief.medium === "stone relief (carved limestone)") {
    horseRelief.medium = "Stone relief";
  }
  if (horseRelief && horseRelief.maker === "Court sculptors under Emperor Taizong (designed by the court artist Yan Liben)") {
    horseRelief.maker = "Court sculptors under Emperor Taizong";
  }
  if (horseRelief && horseRelief.importance === "This relief is one of the famous Six Steeds of Emperor Taizong, commemorating the horses that helped him secure victory in battles leading to the founding of the Tang dynasty. The sculptures reflect Tang ideals of imperial power, military achievement, and realism in animal depiction, and were originally installed at Taizong’s mausoleum complex. Earliest and most famous funerary sculpture example from Tang The style is plain, powerful, and vigorous. The modeling is relatively flat, suggesting influence from linear painting traditions. These sculptures were placed along the “spirit way” (sacred path) leading to the emperor’s tomb.") {
    horseRelief.importance = "This relief is one of the famous Six Steeds of Emperor Taizong, commemorating the horses that helped him secure victory in battles leading to the founding of the Tang dynasty.";
  }
  const longmen = STUDY_ITEMS.find((item) => item.id === 30);
  if (longmen && longmen.title === "Fengxiansi, Longmen Grottoes, Luoyang") {
    longmen.title = "Buddha Statue, Longmen Grottoes, Empress Wu";
  }
  const seokguram = STUDY_ITEMS.find((item) => item.id === 31);
  if (seokguram && seokguram.title === "Seated Buddha, Seokguram Grotto") {
    seokguram.title = "Seated Buddha, Seokguram Grotto, Gyeongju";
  }
  const ladyShosoin = STUDY_ITEMS.find((item) => item.id === 34);
  if (ladyShosoin && ladyShosoin.title === "Lady under a tree") {
    ladyShosoin.title = "Lady under a tree, Shosoin";
  }
  if (ladyShosoin && ladyShosoin.maker === "unknown japanese artist during the nara period") {
    ladyShosoin.maker = "Japanese artist during the nara period";
  }
  if (ladyShosoin && ladyShosoin.importance === "even though the painting depicts a Tang Dynasty women, it is widely known as a japanese painting. this shows the influence China had on the japanese arts at the time.") {
    ladyShosoin.importance = "Japanese made, imitating Chinese paintings, Tang woman, Tang beauty.";
  }
  const sogdianBanner = STUDY_ITEMS.find((item) => item.id === 35);
  if (sogdianBanner && sogdianBanner.title === "Sogdian Brocade Banner") {
    sogdianBanner.title = "Sogdian Brocaded Silk Banner Lion Hunting";
  }
  if (sogdianBanner && sogdianBanner.date === "Tang early 700 CE") {
    sogdianBanner.date = "Tang Dynasty 700 CE";
  }
  if (sogdianBanner && sogdianBanner.medium === "Silk textile (weft-faced compound twill)") {
    sogdianBanner.medium = "Sogdian Brocaded Silk";
  }
  if (sogdianBanner && sogdianBanner.maker === "Sogdian textile workshop in Tang China (often associated with the artisan He Chou)") {
    sogdianBanner.maker = "Made in china, Sogdian";
  }
  if (sogdianBanner && sogdianBanner.importance === "Shows luxury motifs traveling across East Asia through trade, migration, and adaptation.") {
    sogdianBanner.importance = "Gift from China to Japan. Shows luxury motifs traveling across East Asia through trade, migration, and adaptation.";
  }
  const shakaTriad = STUDY_ITEMS.find((item) => item.id === 36);
  if (shakaTriad && shakaTriad.title === "Shaka Triad") {
    shakaTriad.title = "Shaka Triad, Horyuji";
  }
  const hungryTigris = STUDY_ITEMS.find((item) => item.id === 37);
  if (hungryTigris && hungryTigris.title === "Shashin Shiko") {
    hungryTigris.title = "Hungry Tigress Jataka";
  }
}

function saveStudyItems() {
  try {
    localStorage.setItem(CARD_DATA_KEY, JSON.stringify(STUDY_ITEMS));
  } catch (err) {
    console.warn("Could not save card edits.", err);
  }
}

function loadCustomImageMap() {
  try {
    const raw = localStorage.getItem(CARD_IMAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (!parsed || typeof parsed !== "object") return {};

    const cleaned = {};
    Object.entries(parsed).forEach(([key, value]) => {
      if (typeof value === "string" && value.startsWith("data:image/")) {
        cleaned[Number(key)] = value;
      }
    });
    return cleaned;
  } catch (err) {
    console.warn("Could not restore saved card images.", err);
    return {};
  }
}

function saveCustomImageMap() {
  try {
    localStorage.setItem(CARD_IMAGE_KEY, JSON.stringify(customImageMap));
    return true;
  } catch (err) {
    console.warn("Could not save card image.", err);
    return false;
  }
}

function resetCustomImage(itemId) {
  if (!customImageMap[itemId]) return true;
  delete customImageMap[itemId];
  return saveCustomImageMap();
}

function resetStudyItemFromBase(itemId) {
  const item = STUDY_ITEMS.find((entry) => entry.id === itemId);
  const base = BASE_STUDY_ITEMS.find((entry) => entry.id === itemId);
  if (!item || !base) return false;
  EDITABLE_CARD_FIELDS.forEach((field) => {
    item[field] = base[field];
  });
  return true;
}

const revealSequence = [
  { key: "title", label: "Name / title" },
  { key: "periodDate", label: "Date and period" },
  { key: "medium", label: "Medium" },
  { key: "maker", label: "Culture / maker" },
  { key: "importance", label: "Importance" },
];

function hasCompletedTeachReveal(cardState) {
  return Boolean(cardState && cardState.revealedOnce);
}

function hasTeachMastery(cardState) {
  return Boolean(cardState && cardState.teachMastered);
}

function markTeachRevealComplete(cardState) {
  if (!cardState || cardState.revealedOnce) return false;
  cardState.revealedOnce = true;
  cardState.taught = true;
  return true;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && parsed.cards) {
      const cards = {};
      STUDY_ITEMS.forEach((item) => {
        const stored = parsed.cards[item.id] || {};
        const revealedOnce = typeof stored.revealedOnce === "boolean" ? stored.revealedOnce : false;
        const teachMastered = typeof stored.teachMastered === "boolean" ? stored.teachMastered : false;
        const nextCheckFieldIndex = Number.isFinite(stored.nextCheckFieldIndex) ? stored.nextCheckFieldIndex : 0;
        const singleCheckSeenKeys = Array.isArray(stored.singleCheckSeenKeys)
          ? stored.singleCheckSeenKeys.filter((key) => CHECK_FIELDS.some((entry) => entry.key === key))
          : [];
        const singleCheckPassedKeys = Array.isArray(stored.singleCheckPassedKeys)
          ? stored.singleCheckPassedKeys.filter((key) => CHECK_FIELDS.some((entry) => entry.key === key))
          : [];
        cards[item.id] = {
          ...buildDefaultCardState(),
          ...stored,
          checkDue: Number.isFinite(stored.checkDue) ? stored.checkDue : Number.MAX_SAFE_INTEGER,
          checkStreak: Number.isFinite(stored.checkStreak) ? stored.checkStreak : 0,
          lastSeenTurn: Number.isFinite(stored.lastSeenTurn) ? stored.lastSeenTurn : -1,
          nextCheckFieldIndex,
          singleCheckSeenKeys,
          singleCheckPassedKeys,
          revealedOnce,
          teachMastered,
          taught: revealedOnce,
        };
      });
      return {
        turn: Number.isFinite(parsed.turn) ? parsed.turn : 1,
        cards,
        session: {
          ...buildDefaultSessionState(),
          ...(parsed.session || {}),
        },
      };
    }
  } catch (err) {
    console.warn("Could not restore local state.", err);
  }

  const cards = {};
  STUDY_ITEMS.forEach((item) => {
    cards[item.id] = buildDefaultCardState();
  });
  return {
    turn: 1,
    cards,
    session: buildDefaultSessionState(),
  };
}

function saveState() {
  try {
    syncSessionToState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn("Could not save local state.", err);
  }
}

function applyStateCorrections() {
  if (!state || !state.cards) return;
  STUDY_ITEMS.forEach((item) => {
    const card = state.cards[item.id];
    if (!card) return;
    if (!Number.isFinite(card.lastSeenTurn)) {
      card.lastSeenTurn = -1;
    }
    if (typeof card.revealedOnce !== "boolean") {
      card.revealedOnce = false;
    }
    if (typeof card.teachMastered !== "boolean") {
      card.teachMastered = false;
    }
    if (!Number.isFinite(card.nextCheckFieldIndex)) {
      card.nextCheckFieldIndex = 0;
    }
    if (!Array.isArray(card.singleCheckSeenKeys)) {
      card.singleCheckSeenKeys = [];
    }
    if (!Array.isArray(card.singleCheckPassedKeys)) {
      card.singleCheckPassedKeys = [];
    }
    card.singleCheckSeenKeys = card.singleCheckSeenKeys.filter((key) => CHECK_FIELDS.some((entry) => entry.key === key));
    card.singleCheckPassedKeys = card.singleCheckPassedKeys.filter((key) => CHECK_FIELDS.some((entry) => entry.key === key));
    if (!card.revealedOnce) {
      card.teachMastered = false;
    }
    card.taught = card.revealedOnce;
    if (!card.revealedOnce) {
      card.checkDue = Number.MAX_SAFE_INTEGER;
      card.checkStreak = 0;
      card.nextCheckFieldIndex = 0;
      card.singleCheckSeenKeys = [];
      card.singleCheckPassedKeys = [];
    }
  });
}

function setMode(mode, options = {}) {
  const preserveTeachState = Boolean(options.preserveTeachState);
  modeButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  Object.entries(panels).forEach(([key, panel]) => {
    panel.classList.toggle("active", key === mode);
  });
  currentMode = mode;

  if (mode === "teach") {
    startTeachSession(!preserveTeachState);
  }

  if (mode === "flash") {
    startFlashSession();
  }

  if (mode === "test") {
    startCustomTestMode();
  }

  if (mode === "quiz") {
    resetQuizView();
  }

  if (mode === "db") {
    renderDbEditor();
  }

  saveState();
}

function startTeachSession(force = false) {
  if (!getActiveDeckItems().length) {
    clearTeachSession();
    renderTeachCard();
    return;
  }
  if (!teachState.itemId || !isItemInActiveDeck(teachState.itemId) || force) {
    selectNextTeachItem();
  }
  renderTeachCard();
}

function selectNextTeachItem(options = {}) {
  const deckItems = getActiveDeckItems();
  const avoidItemId = Number.isFinite(options.avoidItemId) ? options.avoidItemId : null;
  const firstUnmastered = deckItems.find((item) => !hasTeachMastery(state.cards[item.id]));
  if (firstUnmastered) {
    teachState.itemId = firstUnmastered.id;
    teachState.step = 0;
    return;
  }
  const seen = deckItems.filter((item) => state.cards[item.id].attempts > 0);
  const unseen = deckItems.filter((item) => state.cards[item.id].attempts === 0);
  const learningPool = seen.filter((item) => state.cards[item.id].box < MASTERY_BOX_THRESHOLD);
  const checkNow = learningPool.filter((item) => hasCompletedTeachReveal(state.cards[item.id]) && state.cards[item.id].checkDue <= state.turn);
  const dueLearning = learningPool.filter((item) => state.cards[item.id].nextDue <= state.turn);
  const canIntroduceNew = learningPool.length < MAX_ACTIVE_LEARNING_CARDS;

  let candidates = deckItems;
  let selectionMode = "due";
  if (canIntroduceNew && unseen.length) {
    candidates = unseen;
    selectionMode = "unseen";
  } else if (checkNow.length) {
    candidates = checkNow;
    selectionMode = "check";
  } else if (dueLearning.length) {
    candidates = dueLearning;
    selectionMode = "due";
  } else if (learningPool.length) {
    candidates = learningPool;
    selectionMode = "due";
  } else if (unseen.length) {
    candidates = unseen;
    selectionMode = "unseen";
  } else if (seen.length) {
    candidates = seen;
    selectionMode = "due";
  }

  const sorted = candidates.slice().sort((a, b) => {
    const pa = state.cards[a.id];
    const pb = state.cards[b.id];
    if (selectionMode === "check") {
      return pa.checkDue - pb.checkDue || pa.lastSeenTurn - pb.lastSeenTurn || pa.box - pb.box || a.id - b.id;
    }
    if (selectionMode === "unseen") {
      return a.id - b.id;
    }
    return pa.nextDue - pb.nextDue || pa.lastSeenTurn - pb.lastSeenTurn || pa.box - pb.box || a.id - b.id;
  });

  const pickCandidate = (pool) => {
    if (!pool.length) return { item: null, usedCooldown: false };
    const cooldownMatch = pool.find((item) => {
      if (avoidItemId !== null && item.id === avoidItemId) return false;
      const lastSeen = Number.isFinite(state.cards[item.id].lastSeenTurn) ? state.cards[item.id].lastSeenTurn : -1;
      return state.turn - lastSeen > TEACH_REPEAT_COOLDOWN_TURNS;
    });
    if (cooldownMatch) return { item: cooldownMatch, usedCooldown: true };
    const avoidMatch = pool.find((item) => avoidItemId === null || item.id !== avoidItemId);
    return { item: (avoidMatch || pool[0]), usedCooldown: false };
  };

  let picked = pickCandidate(sorted);
  let nextItem = picked.item;
  const shouldFallbackToPool = selectionMode !== "unseen" && learningPool.length > 1 && (!picked.usedCooldown);
  if (shouldFallbackToPool) {
    const poolSorted = learningPool.slice().sort((a, b) => {
      const pa = state.cards[a.id];
      const pb = state.cards[b.id];
      return pa.lastSeenTurn - pb.lastSeenTurn || pa.nextDue - pb.nextDue || pa.box - pb.box || a.id - b.id;
    });
    const poolPick = pickCandidate(poolSorted);
    if (poolPick.item) {
      nextItem = poolPick.item;
      picked = poolPick;
    }
  }
  if (!nextItem && deckItems.length) {
    const fallback = avoidItemId === null
      ? deckItems[0]
      : (deckItems.find((item) => item.id !== avoidItemId) || deckItems[0]);
    nextItem = fallback;
  }

  teachState.itemId = nextItem ? nextItem.id : null;
  teachState.step = 0;
}

function renderTeachCard() {
  const deckItems = getActiveDeckItems();
  if (!deckItems.length) {
    teachTitle.textContent = "No cards in this deck";
    teachHint.textContent = "Switch decks or add cards to the current deck in the database tab.";
    teachFacts.innerHTML = "";
    teachFacts.classList.remove("hidden");
    teachImage.src = "";
    teachImage.alt = "No cards in the selected deck";
    teachCheck.classList.add("hidden");
    if (teachControls) teachControls.classList.add("hidden");
    teachRating.classList.add("hidden");
    sessionInfo.textContent = "This deck is empty.";
    return;
  }
  const item = deckItems.find((x) => x.id === teachState.itemId);
  if (!item) {
    selectNextTeachItem();
    renderTeachCard();
    return;
  }

  const cardState = state.cards[item.id];
  if (teachState.checking) {
    renderTeachCheck(item, cardState, { forceFields: teachState.checkFields, restoreDrafts: true });
    return;
  }
  if (hasCompletedTeachReveal(cardState) && teachState.step === 0) {
    renderTeachCheck(item, cardState);
    return;
  }

  const isComplete = teachState.step >= revealSequence.length;
  if (isComplete && markTeachRevealComplete(cardState)) {
    if (cardState.attempts > 0 && cardState.checkDue === Number.MAX_SAFE_INTEGER) {
      cardState.checkDue = state.turn + CHECK_INTERVALS[Math.max(1, Math.min(CHECK_INTERVALS.length - 1, cardState.box))];
    }
    saveState();
  }
  teachTitle.textContent = isComplete ? item.title : "Identify this artwork";
  teachHint.textContent = `Reveal ${revealSequence[Math.min(teachState.step, revealSequence.length - 1)].label} to continue.`;
  teachFacts.innerHTML = "";
  teachFacts.classList.remove("hidden");

  revealSequence.forEach((entry, index) => {
    const line = document.createElement("p");
    line.className = "fact-line";
    const isHidden = teachState.step <= index;
    if (isHidden) {
      line.classList.add("hidden-line");
    }
    const value = isHidden
      ? "—"
      : entry.key === "periodDate"
        ? getPeriodAndDate(item)
        : item[entry.key] || "";
    line.innerHTML = `<strong>${entry.label}:</strong> <span class="line-value">${value}</span>`;
    teachFacts.appendChild(line);
  });

  teachImage.src = getItemImage(item.id);
  teachImage.alt = `Reference image for ${isComplete ? item.title : "artwork identification"}`;

  if (teachState.step < revealSequence.length) {
    const nextLabel = revealSequence[teachState.step].label;
    teachReveal.textContent = `Reveal ${nextLabel}`;
    teachReveal.disabled = false;
    if (teachControls) teachControls.classList.remove("hidden");
    teachCheck.classList.add("hidden");
    teachRating.classList.add("hidden");
  } else {
    if (teachControls) teachControls.classList.add("hidden");
    teachCheck.classList.add("hidden");
    teachRating.classList.remove("hidden");
    teachHint.textContent = "Rate this item to schedule your next review.";
  }

  sessionInfo.textContent = `${getActiveDeck().name}: current mastery box ${cardState.box} / 5`;
  teachState.checking = false;
  teachState.checkField = null;
  teachState.checkFields = [];
  teachState.checkDrafts = {};
  teachState.checkRevealed = false;
}

function isCheckDue(cardState) {
  return cardState && hasCompletedTeachReveal(cardState) && cardState.attempts > 0 && cardState.checkDue <= state.turn;
}

function shouldUseFullCheck(cardState) {
  return (
    cardState &&
    Array.isArray(cardState.singleCheckPassedKeys) &&
    cardState.singleCheckPassedKeys.length >= CHECK_FIELDS.length
  );
}

function pickTeachCheckField(cardState) {
  const index = Number.isFinite(cardState?.nextCheckFieldIndex) ? cardState.nextCheckFieldIndex : 0;
  return CHECK_FIELDS[((index % CHECK_FIELDS.length) + CHECK_FIELDS.length) % CHECK_FIELDS.length];
}

function checkIntervalForItem(cardState, passed) {
  const idx = Math.max(1, Math.min(cardState.box, CHECK_INTERVALS.length - 1));
  const base = CHECK_INTERVALS[idx];
  if (passed) {
    const streak = Number.isFinite(cardState.checkStreak) ? cardState.checkStreak : 0;
    return base + Math.round(streak * CHECK_FAIL_MULTIPLIER);
  }
  return Math.max(2, Math.floor(base * CHECK_FAIL_MULTIPLIER));
}

function renderTeachCheck(item, cardState, options = {}) {
  const forcedFields = Array.isArray(options.forceFields) && options.forceFields.length ? options.forceFields : null;
  const useFullCheck = forcedFields ? forcedFields.length > 1 : shouldUseFullCheck(cardState);
  const fields = forcedFields || (useFullCheck ? CHECK_FIELDS : [pickTeachCheckField(cardState)]);
  const restoring = Boolean(options.restoreDrafts);
  teachState.checking = true;
  teachState.checkField = fields[0];
  teachState.checkFields = fields;
  if (!restoring) {
    teachState.checkDrafts = {};
    teachState.checkRevealed = false;
  }
  teachTitle.textContent = "Identify this artwork";
  teachHint.textContent = `Quick check: type ${useFullCheck ? "all fields" : "one field"} you recall, then confirm if you were correct.`;
  teachFacts.classList.add("hidden");
  teachFacts.innerHTML = "";
  if (teachControls) teachControls.classList.add("hidden");
  teachRating.classList.add("hidden");
  teachImage.src = getItemImage(item.id);
  teachImage.alt = "Reference image for a recall check";

  teachCheck.classList.remove("hidden");
  teachCheckPrompt.textContent = useFullCheck ? "Recall all fields for this artwork." : `Recall: ${fields[0].label}`;
  renderTeachCheckInputs(fields);
  if (restoring) {
    const drafts = teachState.checkDrafts && typeof teachState.checkDrafts === "object" ? teachState.checkDrafts : {};
    teachCheckFields.querySelectorAll("textarea[data-field]").forEach((input) => {
      const value = drafts[input.dataset.field];
      input.value = typeof value === "string" ? value : "";
    });
  }
  teachCheckAnswer.classList.add("hidden");
  teachCheckAnswer.textContent = "";
  teachCheckReveal.textContent = useFullCheck ? "Reveal all keys" : "Reveal key";
  teachCheckReveal.dataset.revealed = "false";
  if (restoring && teachState.checkRevealed) {
    revealTeachCheckAnswer();
  }

  sessionInfo.textContent = `Check mode active (box ${cardState.box} / 5)`;
  saveState();
}

function revealTeachCheckAnswer() {
  if (!teachState.itemId) return;
  const item = STUDY_ITEMS.find((item) => item.id === teachState.itemId);
  if (!item) return;
  const fields = teachState.checkFields.length
    ? teachState.checkFields
    : (teachState.checkField ? [teachState.checkField] : []);
  if (!fields.length) return;
  const wasRevealed = teachCheckReveal.dataset.revealed === "true";
  const revealLabel = (teachState.checkFields.length > 1 ? "all keys" : "key");
  if (wasRevealed) {
    teachCheckAnswer.classList.add("hidden");
    teachCheckReveal.textContent = `Reveal ${revealLabel}`;
    teachCheckReveal.dataset.revealed = "false";
    teachState.checkRevealed = false;
    saveState();
    return;
  }
  teachCheckAnswer.innerHTML = fields
    .map((entry) => `<strong>${entry.label}:</strong> ${getFieldValue(item, entry.key)}`)
    .join("<br>");
  teachCheckAnswer.classList.remove("hidden");
  teachCheckReveal.textContent = "Hide key";
  teachCheckReveal.dataset.revealed = "true";
  teachState.checkRevealed = true;
  saveState();
}

function renderTeachCheckInputs(fields) {
  teachCheckFields.innerHTML = "";
  fields.forEach((entry) => {
    const wrapper = document.createElement("div");
    wrapper.className = "check-field";

    const label = document.createElement("label");
    label.className = "check-field-label";
    label.textContent = entry.label;

    const input = document.createElement("textarea");
    input.className = "text-input";
    input.rows = 3;
    input.placeholder = `Type your best memory for ${entry.label}...`;
    input.dataset.field = entry.key;

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    teachCheckFields.appendChild(wrapper);
  });
}

function launchQuickConfetti(anchorElement) {
  if (!anchorElement || !document.body) return;

  const rect = anchorElement.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const colors = ["#f7b32b", "#f25f5c", "#70c1b3", "#2f5f8a", "#5f4e8d", "#f2e8cf"];
  const layer = document.createElement("div");
  layer.style.position = "fixed";
  layer.style.inset = "0";
  layer.style.pointerEvents = "none";
  layer.style.zIndex = "9999";
  document.body.appendChild(layer);

  const pieces = 26;
  for (let i = 0; i < pieces; i += 1) {
    const piece = document.createElement("span");
    piece.style.position = "absolute";
    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    piece.style.width = `${6 + Math.floor(Math.random() * 6)}px`;
    piece.style.height = `${10 + Math.floor(Math.random() * 7)}px`;
    piece.style.borderRadius = "2px";
    piece.style.background = colors[i % colors.length];
    piece.style.opacity = "0.95";

    const dx = (Math.random() - 0.5) * 220;
    const lift = -70 - Math.random() * 150;
    const fall = 140 + Math.random() * 170;
    const drift = (Math.random() - 0.5) * 70;
    const spin = (Math.random() - 0.5) * 700;
    const duration = 1500 + Math.random() * 500;

    piece.animate(
      [
        { transform: "translate(-50%, -50%) rotate(0deg)", opacity: 0.95 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${lift}px)) rotate(${spin * 0.45}deg)`, opacity: 0.95, offset: 0.42 },
        { transform: `translate(calc(-50% + ${dx + drift}px), calc(-50% + ${fall}px)) rotate(${spin}deg)`, opacity: 0 },
      ],
      {
        duration,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      },
    );

    layer.appendChild(piece);
  }

  window.setTimeout(() => {
    if (layer.parentNode) layer.parentNode.removeChild(layer);
  }, 2300);
}

function submitTeachCheck(passed, triggerElement = null) {
  const itemId = teachState.itemId;
  if (!itemId) return;
  const isFullFieldCheck = teachState.checkFields.length > 1;

  if (passed) {
    launchQuickConfetti(triggerElement);
    rateItem(itemId, isFullFieldCheck ? "easy" : "good", { deferRender: true });
  } else {
    rateItem(itemId, "again", { deferRender: true });
  }

  const card = state.cards[itemId];
  if (card) {
    if (!isFullFieldCheck && teachState.checkFields[0]) {
      const currentFieldKey = teachState.checkFields[0].key;
      if (!Array.isArray(card.singleCheckSeenKeys)) {
        card.singleCheckSeenKeys = [];
      }
      if (!Array.isArray(card.singleCheckPassedKeys)) {
        card.singleCheckPassedKeys = [];
      }
      if (!card.singleCheckSeenKeys.includes(currentFieldKey)) {
        card.singleCheckSeenKeys.push(currentFieldKey);
      }
      if (passed) {
        if (!card.singleCheckPassedKeys.includes(currentFieldKey)) {
          card.singleCheckPassedKeys.push(currentFieldKey);
        }
        card.nextCheckFieldIndex = (
          (Number.isFinite(card.nextCheckFieldIndex) ? card.nextCheckFieldIndex : 0) + 1
        ) % CHECK_FIELDS.length;
      }
    }
    if (passed && isFullFieldCheck) {
      card.teachMastered = true;
    }
    if (!passed && isFullFieldCheck) {
      card.teachMastered = false;
      card.nextCheckFieldIndex = 0;
      card.singleCheckPassedKeys = [];
    }
    if (passed) {
      const priorStreak = Number.isFinite(card.checkStreak) ? card.checkStreak : 0;
      card.checkStreak = priorStreak + (isFullFieldCheck ? 2 : 1);
      const baseInterval = checkIntervalForItem(card, true);
      const multiplier = isFullFieldCheck ? FULL_CHECK_PASS_INTERVAL_MULTIPLIER : 1;
      card.checkDue = state.turn + Math.max(4, Math.round(baseInterval * multiplier));
    } else {
      card.checkStreak = 0;
      card.checkDue = state.turn + checkIntervalForItem(card, false);
    }
  }

  teachState.checking = false;
  teachState.checkField = null;
  teachState.checkFields = [];
  teachState.checkDrafts = {};
  teachState.checkRevealed = false;
  if (teachCheckFields) {
    teachCheckFields.querySelectorAll("textarea[data-field]").forEach((input) => {
      input.value = "";
    });
  }
  teachCheckAnswer.classList.add("hidden");
  teachCheckAnswer.textContent = "";
  teachCheckReveal.dataset.revealed = "false";

  saveState();
  selectNextTeachItem({ avoidItemId: itemId });
  renderTeachCard();
}

function revealTeachStep() {
  const previousStep = teachState.step;
  teachState.step = Math.min(revealSequence.length, teachState.step + 1);
  if (teachState.itemId && previousStep < revealSequence.length && teachState.step >= revealSequence.length) {
    const card = state.cards[teachState.itemId];
    if (markTeachRevealComplete(card)) {
      if (card.attempts > 0 && card.checkDue === Number.MAX_SAFE_INTEGER) {
        card.checkDue = state.turn + CHECK_INTERVALS[Math.max(1, Math.min(CHECK_INTERVALS.length - 1, card.box))];
      }
    }
  }
  saveState();
  renderTeachCard();
}

function rateItem(itemId, grade, options = {}) {
  const deferRender = Boolean(options.deferRender);
  const card = state.cards[itemId];
  if (!card) return;

  if (grade === "again") {
    card.box = Math.max(1, card.box - 1);
  } else if (grade === "hard") {
    card.box = Math.max(1, card.box);
  } else if (grade === "good") {
    card.box = Math.min(5, card.box + 1);
    card.correct += 1;
  } else if (grade === "easy") {
    card.box = 5;
    card.correct += 2;
  }

  card.attempts += 1;
  card.lastSeenTurn = state.turn;
  const interval = INTERVALS[Math.max(0, Math.min(INTERVALS.length - 1, card.box))];
  card.nextDue = state.turn + interval;
  card.score = Math.max(card.score, card.box);
  if (hasCompletedTeachReveal(card) && card.checkDue === Number.MAX_SAFE_INTEGER) {
    card.checkDue = state.turn + CHECK_INTERVALS[Math.max(1, Math.min(CHECK_INTERVALS.length - 1, card.box))];
  }
  state.turn += 1;

  saveState();
  refreshProgress();
  if (!deferRender) {
    selectNextTeachItem({ avoidItemId: itemId });
    renderTeachCard();
  }
}

function startFlashSession() {
  const deckItems = getActiveDeckItems();
  if (!deckItems.length) {
    flashState.itemId = null;
    flashState.revealed = false;
    renderFlashGallery();
    renderFlashViewer();
    return;
  }
  if (!isItemInActiveDeck(flashState.itemId)) {
    flashState.itemId = deckItems[0].id;
  }
  renderFlashGallery();
  setFlashActiveThumbnail(flashState.itemId, { scroll: true });
  renderFlashViewer();
}

function createFlashThumbnailDataUrl(source, maxSide = FLASH_THUMB_MAX_SIDE) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const ratio = Math.min(1, maxSide / Math.max(image.width || 1, image.height || 1));
      const width = Math.max(1, Math.round((image.width || 1) * ratio));
      const height = Math.max(1, Math.round((image.height || 1) * ratio));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(source);
        return;
      }
      ctx.fillStyle = "#fdf6e9";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(image, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.76));
    };
    image.onerror = () => resolve(source);
    image.src = source;
  });
}

function ensureFlashThumbObserver() {
  if (flashThumbObserver || !flashBrowse || typeof IntersectionObserver === "undefined") return;
  flashThumbObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        loadFlashThumbForImage(image);
        observer.unobserve(image);
      });
    },
    {
      root: flashBrowse,
      rootMargin: "220px 0px",
      threshold: 0.01,
    },
  );
}

function loadFlashThumbForImage(image) {
  if (!image || image.dataset.loaded === "true") return;
  const itemId = Number(image.dataset.itemId);
  if (!isValidItemId(itemId)) return;
  image.dataset.loaded = "true";

  if (!customImageMap[itemId]) {
    image.src = getItemImage(itemId);
    return;
  }

  if (flashThumbCache[itemId]) {
    image.src = flashThumbCache[itemId];
    return;
  }

  if (!flashThumbPromiseCache[itemId]) {
    flashThumbPromiseCache[itemId] = createFlashThumbnailDataUrl(customImageMap[itemId]).then((thumb) => {
      flashThumbCache[itemId] = thumb || customImageMap[itemId];
      return flashThumbCache[itemId];
    });
  }
  flashThumbPromiseCache[itemId].then((thumb) => {
    image.src = thumb || customImageMap[itemId];
  });
}

function queueFlashThumbLoad(image) {
  if (!image) return;
  if (flashThumbObserver) {
    flashThumbObserver.observe(image);
    return;
  }
  loadFlashThumbForImage(image);
}

function setFlashActiveThumbnail(itemId, options = {}) {
  if (!flashBrowse) return;
  const shouldScroll = Boolean(options.scroll);
  const activeButton = flashBrowse.querySelector(`[data-flash-item="${itemId}"]`);
  flashBrowse.querySelectorAll("[data-flash-item]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.flashItem) === itemId);
  });
  if (!activeButton) return;
  const activeImage = activeButton.querySelector("img[data-item-id]");
  if (activeImage) loadFlashThumbForImage(activeImage);
  if (shouldScroll) {
    activeButton.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
}

function renderFlashGallery() {
  const deckItems = getActiveDeckItems();
  if (!flashBrowse) return;
  ensureFlashThumbObserver();
  if (flashThumbObserver) {
    flashThumbObserver.disconnect();
  }
  flashBrowse.innerHTML = "";
  if (flashSub) {
    flashSub.textContent = deckItems.length
      ? `Browsing ${deckItems.length} cards from ${getActiveDeck().name}. Use the arrows in the viewer to move through this deck.`
      : `This deck is empty. Add cards to ${getActiveDeck().name} in the database tab.`;
  }

  deckItems.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "flash-browse-card";
    card.dataset.flashItem = String(item.id);
    card.setAttribute("aria-label", `Select ${item.title}`);
    card.classList.toggle("active", item.id === flashState.itemId);

    const image = document.createElement("img");
    image.className = "flash-browse-image";
    image.src = FLASH_THUMB_PLACEHOLDER;
    image.loading = "lazy";
    image.decoding = "async";
    image.fetchPriority = "low";
    image.dataset.itemId = String(item.id);
    image.dataset.loaded = "false";
    image.alt = `Artwork image for ${item.title}`;

    card.appendChild(image);
    flashBrowse.appendChild(card);
    queueFlashThumbLoad(image);
  });
}

function renderFlashViewer() {
  const deckItems = getActiveDeckItems();
  if (!flashViewerImage || !flashViewerInner || !flashViewerTitle || !flashViewerFacts || !flashIndex) return;
  if (!deckItems.length || !isItemInActiveDeck(flashState.itemId)) {
    flashViewerImage.src = "";
    flashViewerTitle.textContent = deckItems.length ? "No card selected" : "No cards in this deck";
    flashViewerFacts.innerHTML = "";
    flashIndex.textContent = `0 / ${deckItems.length}`;
    if (flashPrev) flashPrev.disabled = true;
    if (flashNext) flashNext.disabled = true;
    return;
  }

  const item = deckItems.find((entry) => entry.id === flashState.itemId);
  if (!item) return;

  const currentIndex = deckItems.findIndex((entry) => entry.id === item.id);
  flashIndex.textContent = `${currentIndex + 1} / ${deckItems.length}`;
  flashViewerImage.src = getItemImage(item.id);
  flashViewerImage.alt = `Selected artwork image for ${item.title}`;
  flashViewerTitle.textContent = item.title;
  flashViewerFacts.innerHTML = `
    <p class="fact-line"><strong>Name / title:</strong> ${item.title}</p>
    <p class="fact-line"><strong>Date and period:</strong> ${getPeriodAndDate(item)}</p>
    <p class="fact-line"><strong>Culture / maker:</strong> ${item.maker}</p>
    <p class="fact-line"><strong>Medium:</strong> ${item.medium}</p>
    <p class="fact-line"><strong>Importance:</strong> ${item.importance}</p>
  `;
  flashViewerInner.classList.toggle("is-flipped", Boolean(flashState.revealed));

  if (flashPrev) flashPrev.disabled = currentIndex <= 0;
  if (flashNext) flashNext.disabled = currentIndex >= deckItems.length - 1;
}

function selectFlashItem(itemId) {
  if (!isItemInActiveDeck(itemId)) return;
  flashState.itemId = itemId;
  flashState.revealed = false;
  saveState();
  setFlashActiveThumbnail(itemId, { scroll: true });
  renderFlashViewer();
}

function stepFlashItem(direction) {
  const deckItems = getActiveDeckItems();
  if (!isItemInActiveDeck(flashState.itemId)) return;
  const currentIndex = deckItems.findIndex((entry) => entry.id === flashState.itemId);
  if (currentIndex < 0) return;
  const nextIndex = currentIndex + direction;
  if (nextIndex < 0 || nextIndex >= deckItems.length) return;
  selectFlashItem(deckItems[nextIndex].id);
}

function toggleFlashReveal() {
  if (!isItemInActiveDeck(flashState.itemId)) return;
  flashState.revealed = !flashState.revealed;
  saveState();
  renderFlashViewer();
}

function defaultTestFieldKeys() {
  return CHECK_FIELDS.map((entry) => entry.key);
}

function sanitizeTestFieldKeys(keys) {
  const validKeys = new Set(CHECK_FIELDS.map((entry) => entry.key));
  const source = Array.isArray(keys) ? keys : [];
  const unique = [];
  source.forEach((key) => {
    if (typeof key !== "string" || !validKeys.has(key) || unique.includes(key)) return;
    unique.push(key);
  });
  return unique;
}

function isValidTestItemId(itemId) {
  return isItemInActiveDeck(itemId);
}

function sanitizeTestItemIds(itemIds) {
  const source = Array.isArray(itemIds) ? itemIds : [];
  const unique = [];
  source.forEach((itemId) => {
    if (!isValidTestItemId(itemId) || unique.includes(itemId)) return;
    unique.push(itemId);
  });
  return unique;
}

function defaultTestItemIds() {
  return getActiveDeckItemIds();
}

function mapTestSelectionNumber(value) {
  if (!Number.isFinite(value) || value < 1) return null;
  const activeDeck = getActiveDeck();
  const activeItemIds = getActiveDeckItemIds();
  if (activeDeck && activeDeck.id !== DEFAULT_DECK_ID) {
    return activeItemIds[value - 1] || (isValidTestItemId(value) ? value : null);
  }
  return isValidTestItemId(value) ? value : null;
}

function parseTestImageSelection(rawSelection) {
  const raw = typeof rawSelection === "string" ? rawSelection.trim() : "";
  if (!raw) {
    return { itemIds: defaultTestItemIds(), invalidTokens: [] };
  }

  const valid = [];
  const invalidTokens = [];
  raw.split(",")
    .map((token) => token.trim())
    .filter(Boolean)
    .forEach((token) => {
      const rangeMatch = token.match(/^(\d+)\s*-\s*(\d+)$/);
      if (rangeMatch) {
        const start = Number(rangeMatch[1]);
        const end = Number(rangeMatch[2]);
        const step = start <= end ? 1 : -1;
        for (let value = start; step > 0 ? value <= end : value >= end; value += step) {
          valid.push(value);
        }
        return;
      }
      if (/^\d+$/.test(token)) {
        valid.push(Number(token));
        return;
      }
      invalidTokens.push(token);
    });

  return {
    itemIds: sanitizeTestItemIds(valid.map((value) => mapTestSelectionNumber(value)).filter((value) => value !== null)),
    invalidTokens,
  };
}

function selectedTestFieldKeysFromUi() {
  if (!testFieldOptions) return [];
  return Array.from(testFieldOptions.querySelectorAll('input[type="checkbox"][data-test-field]'))
    .filter((input) => input.checked)
    .map((input) => input.dataset.testField);
}

function renderTestFieldOptions() {
  if (!testFieldOptions) return;
  const chosen = new Set(testState.fieldKeys.length ? testState.fieldKeys : defaultTestFieldKeys());
  testFieldOptions.innerHTML = "";
  CHECK_FIELDS.forEach((entry) => {
    const label = document.createElement("label");
    label.className = "test-field-option";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.dataset.testField = entry.key;
    input.checked = chosen.has(entry.key);
    input.disabled = testState.running;
    const text = document.createElement("span");
    text.textContent = entry.label;
    label.appendChild(input);
    label.appendChild(text);
    testFieldOptions.appendChild(label);
  });
}

function startCustomTestMode() {
  if (!testState.fieldKeys.length) {
    testState.fieldKeys = defaultTestFieldKeys();
  }
  if (!Array.isArray(testState.itemIds) || !testState.itemIds.length) {
    testState.itemIds = defaultTestItemIds();
  }
  if (typeof testState.imageSelection !== "string") {
    testState.imageSelection = "";
  }
  if (!Array.isArray(testState.wrongItemIds)) {
    testState.wrongItemIds = [];
  }
  renderCustomTestMode();
}

function beginCustomTest() {
  const selectedFields = sanitizeTestFieldKeys(selectedTestFieldKeysFromUi());
  if (!selectedFields.length) {
    if (testSetupStatus) testSetupStatus.textContent = "Select at least one field to test.";
    return;
  }

  const rawSelection = testImageNumbers ? testImageNumbers.value : testState.imageSelection;
  const parsedSelection = parseTestImageSelection(rawSelection);
  if (parsedSelection.invalidTokens.length) {
    if (testSetupStatus) {
      testSetupStatus.textContent = `Invalid image numbers: ${parsedSelection.invalidTokens.join(", ")}`;
    }
    return;
  }
  if (!parsedSelection.itemIds.length) {
    if (testSetupStatus) {
      const maxLabel = Math.max(1, getActiveDeckItems().length);
      testSetupStatus.textContent = `No valid image numbers selected. Use deck numbers like 1, 3, 8-12 within 1-${maxLabel}.`;
    }
    return;
  }

  testState.running = true;
  testState.index = 0;
  testState.itemIds = parsedSelection.itemIds;
  testState.fieldKeys = selectedFields;
  testState.imageSelection = typeof rawSelection === "string" ? rawSelection.trim() : "";
  testState.drafts = {};
  testState.revealed = false;
  testState.correctCount = 0;
  testState.wrongItemIds = [];

  if (testSetupStatus) testSetupStatus.textContent = "";
  saveState();
  renderCustomTestMode();
}

function retryCustomTestWrongOnly() {
  if (testState.running || !testState.wrongItemIds.length) return;
  testState.running = true;
  testState.index = 0;
  testState.itemIds = sanitizeTestItemIds(testState.wrongItemIds);
  testState.drafts = {};
  testState.revealed = false;
  testState.correctCount = 0;
  testState.wrongItemIds = [];
  if (testSetupStatus) testSetupStatus.textContent = "Retrying with only the images you missed.";
  saveState();
  renderCustomTestMode();
}

function resetCustomTest() {
  testState.running = false;
  testState.index = 0;
  testState.itemIds = defaultTestItemIds();
  testState.drafts = {};
  testState.revealed = false;
  testState.correctCount = 0;
  testState.wrongItemIds = [];
  if (testSetupStatus) testSetupStatus.textContent = "Test reset. Choose fields and start again.";
  saveState();
  renderCustomTestMode();
}

function renderCustomTestInputs(item) {
  if (!testInputs) return;
  testInputs.innerHTML = "";
  testState.fieldKeys.forEach((fieldKey) => {
    const meta = CHECK_FIELDS.find((entry) => entry.key === fieldKey);
    if (!meta) return;
    const wrapper = document.createElement("div");
    wrapper.className = "check-field";

    const label = document.createElement("label");
    label.className = "check-field-label";
    label.textContent = meta.label;

    const input = document.createElement("textarea");
    input.className = "text-input";
    input.rows = fieldKey === "importance" ? 4 : 3;
    input.placeholder = `Type your answer for ${meta.label}...`;
    input.dataset.testField = fieldKey;
    input.value = typeof testState.drafts[fieldKey] === "string" ? testState.drafts[fieldKey] : "";

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    testInputs.appendChild(wrapper);
  });

  if (testImage) {
    testImage.src = getItemImage(item.id);
    testImage.alt = `Test prompt image for ${item.title}`;
  }
}

function revealCustomTestAnswer() {
  if (!testState.running) return;
  const itemId = testState.itemIds[testState.index];
  const item = STUDY_ITEMS.find((entry) => entry.id === itemId);
  if (!item || !testAnswer) return;

  if (testState.revealed) {
    testState.revealed = false;
    testAnswer.classList.add("hidden");
    testReveal.textContent = "Reveal key";
    saveState();
    return;
  }

  const answerLines = testState.fieldKeys.map((fieldKey) => {
    const meta = CHECK_FIELDS.find((entry) => entry.key === fieldKey);
    const label = meta ? meta.label : fieldKey;
    return `<strong>${label}:</strong> ${getFieldValue(item, fieldKey)}`;
  });
  testAnswer.innerHTML = answerLines.join("<br>");
  testAnswer.classList.remove("hidden");
  testReveal.textContent = "Hide key";
  testState.revealed = true;
  saveState();
}

function submitCustomTestResult(passed, triggerElement = null) {
  if (!testState.running) return;
  const itemId = testState.itemIds[testState.index];
  if (!isValidTestItemId(itemId)) return;

  if (passed) {
    launchQuickConfetti(triggerElement);
    rateItem(itemId, "good", { deferRender: true });
    testState.correctCount += 1;
  } else {
    rateItem(itemId, "again", { deferRender: true });
    if (!testState.wrongItemIds.includes(itemId)) {
      testState.wrongItemIds.push(itemId);
    }
  }

  testState.index += 1;
  testState.drafts = {};
  testState.revealed = false;
  if (testState.index >= testState.itemIds.length) {
    testState.running = false;
  }

  saveState();
  renderCustomTestMode();
}

function renderCustomTestMode() {
  renderTestFieldOptions();
  if (!testRun || !testProgress || !testPrompt || !testStatus || !testAnswer || !testReveal) return;
  const activeDeck = getActiveDeck();
  const deckItems = getActiveDeckItems();
  if (testStart) {
    testStart.textContent = testState.running ? "Restart selected test" : "Start selected test";
  }
  if (testImageNumbers) {
    if (!testState.running) {
      testImageNumbers.value = testState.imageSelection || "";
    }
    testImageNumbers.disabled = testState.running;
  }

  const total = testState.itemIds.length || deckItems.length;
  if (!testState.running) {
    testRun.classList.remove("hidden");
    if (testWrongReview) testWrongReview.classList.add("hidden");
    const completed = total > 0 && testState.index >= total;
    if (completed) {
      const wrongIds = sanitizeTestItemIds(testState.wrongItemIds);
      const wrongLabels = wrongIds
        .map((itemId) => {
          const item = STUDY_ITEMS.find((entry) => entry.id === itemId);
          return item ? `#${item.id} - ${item.title}` : "";
        })
        .filter(Boolean);
      testProgress.textContent = `Completed ${total} of ${total} cards`;
      testPrompt.textContent = "Custom test complete";
      testStatus.textContent = `Score: ${testState.correctCount} / ${total}`;
      if (wrongLabels.length && testWrongReview && testWrongSummary) {
        testWrongReview.classList.remove("hidden");
        testWrongSummary.textContent = `Wrong images (${wrongLabels.length}): ${wrongLabels.join("; ")}`;
      }
      if (testRetryWrong) {
        testRetryWrong.disabled = !wrongLabels.length;
      }
      testInputs.innerHTML = "";
      testAnswer.classList.add("hidden");
      testAnswer.textContent = "";
      if (testImage) {
        testImage.src = "";
        testImage.alt = "Custom test complete";
      }
      testReveal.textContent = "Reveal key";
      testReveal.disabled = true;
      if (testFail) testFail.disabled = true;
      if (testPass) testPass.disabled = true;
      return;
    }

    if (!deckItems.length) {
      testProgress.textContent = "No cards available";
      testPrompt.textContent = "This deck is empty.";
      testStatus.textContent = "Add cards to this deck in the database tab before starting a test.";
      testInputs.innerHTML = "";
      testAnswer.classList.add("hidden");
      testAnswer.textContent = "";
      if (testImage) {
        testImage.src = "";
        testImage.alt = "No cards in the selected deck";
      }
      testReveal.textContent = "Reveal key";
      testReveal.disabled = true;
      if (testFail) testFail.disabled = true;
      if (testPass) testPass.disabled = true;
      return;
    }

    testProgress.textContent = "Ready to start";
    testPrompt.textContent = `Choose fields, choose image numbers, and start your custom test for ${activeDeck.name}.`;
    testStatus.textContent = deckItems.length
      ? `Use deck image numbers 1-${deckItems.length} for ${activeDeck.name}.`
      : "";
    testInputs.innerHTML = "";
    testAnswer.classList.add("hidden");
    testAnswer.textContent = "";
    if (testImage) {
      testImage.src = "";
      testImage.alt = "Custom test prompt";
    }
    testReveal.textContent = "Reveal key";
    testReveal.disabled = true;
    if (testFail) testFail.disabled = true;
    if (testPass) testPass.disabled = true;
    return;
  }

  const itemId = testState.itemIds[testState.index];
  const item = STUDY_ITEMS.find((entry) => entry.id === itemId);
  if (!item) {
    testState.index += 1;
    if (testState.index >= testState.itemIds.length) {
      testState.running = false;
    }
    saveState();
    renderCustomTestMode();
    return;
  }

  testRun.classList.remove("hidden");
  if (testWrongReview) testWrongReview.classList.add("hidden");
  testProgress.textContent = `Card ${testState.index + 1} of ${testState.itemIds.length}`;
  testPrompt.textContent = "Identify this artwork";
  testStatus.textContent = "";
  testReveal.disabled = false;
  if (testFail) testFail.disabled = false;
  if (testPass) testPass.disabled = false;
  testReveal.textContent = testState.revealed ? "Hide key" : "Reveal key";
  renderCustomTestInputs(item);

  if (testState.revealed) {
    const answerLines = testState.fieldKeys.map((fieldKey) => {
      const meta = CHECK_FIELDS.find((entry) => entry.key === fieldKey);
      const label = meta ? meta.label : fieldKey;
      return `<strong>${label}:</strong> ${getFieldValue(item, fieldKey)}`;
    });
    testAnswer.innerHTML = answerLines.join("<br>");
    testAnswer.classList.remove("hidden");
  } else {
    testAnswer.classList.add("hidden");
    testAnswer.textContent = "";
  }
}

function buildDefaultSessionState() {
  return {
    mode: "teach",
    teachItemId: null,
    teachStep: 0,
    teachChecking: false,
    teachCheckFieldKeys: [],
    teachCheckDrafts: {},
    teachCheckRevealed: false,
    flashItemId: null,
    flashRevealed: false,
    testRunning: false,
    testIndex: 0,
    testItemIds: [],
    testFieldKeys: [],
    testImageSelection: "",
    testDrafts: {},
    testRevealed: false,
    testCorrectCount: 0,
    testWrongItemIds: [],
    dbItemId: null,
    dbEditing: false,
    dbFilterDeckId: DB_FILTER_ALL_ID,
  };
}

function collectTeachCheckDrafts() {
  const drafts = {};
  if (!teachCheckFields) return drafts;
  teachCheckFields.querySelectorAll("textarea[data-field]").forEach((input) => {
    const key = input.dataset.field;
    if (!key) return;
    drafts[key] = input.value || "";
  });
  return drafts;
}

function isValidItemId(itemId) {
  return isValidAnyItemId(itemId);
}

function syncSessionToState() {
  if (teachState.checking) {
    teachState.checkDrafts = {
      ...(teachState.checkDrafts || {}),
      ...collectTeachCheckDrafts(),
    };
  }
  state.session = {
    mode: Object.prototype.hasOwnProperty.call(panels, currentMode) ? currentMode : "teach",
    teachItemId: isValidItemId(teachState.itemId) ? teachState.itemId : null,
    teachStep: Math.max(0, Math.min(revealSequence.length, Number.isFinite(teachState.step) ? teachState.step : 0)),
    teachChecking: Boolean(teachState.checking),
    teachCheckFieldKeys: teachState.checkFields.map((entry) => entry.key),
    teachCheckDrafts: teachState.checking ? { ...(teachState.checkDrafts || {}) } : {},
    teachCheckRevealed: Boolean(teachState.checking && teachState.checkRevealed),
    flashItemId: isValidItemId(flashState.itemId) ? flashState.itemId : null,
    flashRevealed: Boolean(flashState.revealed),
    testRunning: Boolean(testState.running),
    testIndex: Math.max(0, Number.isFinite(testState.index) ? testState.index : 0),
    testItemIds: Array.isArray(testState.itemIds)
      ? testState.itemIds.filter((itemId) => isValidTestItemId(itemId))
      : [],
    testFieldKeys: sanitizeTestFieldKeys(testState.fieldKeys),
    testImageSelection: typeof testState.imageSelection === "string" ? testState.imageSelection : "",
    testDrafts: { ...(testState.drafts || {}) },
    testRevealed: Boolean(testState.revealed),
    testCorrectCount: Math.max(0, Number.isFinite(testState.correctCount) ? testState.correctCount : 0),
    testWrongItemIds: sanitizeTestItemIds(testState.wrongItemIds),
    dbItemId: isValidItemId(dbState.itemId) ? dbState.itemId : null,
    dbEditing: Boolean(dbState.editing),
    dbFilterDeckId: isValidDbFilterDeckId(dbState.filterDeckId) ? dbState.filterDeckId : DB_FILTER_ALL_ID,
  };
}

function restoreSessionFromState() {
  const session = {
    ...buildDefaultSessionState(),
    ...(state.session || {}),
  };

  const restoredMode = session.mode === "quiz" ? "test" : session.mode;
  currentMode = Object.prototype.hasOwnProperty.call(panels, restoredMode) ? restoredMode : "teach";
  teachState.itemId = isValidItemId(session.teachItemId) ? session.teachItemId : null;
  teachState.step = Math.max(0, Math.min(revealSequence.length, Number.isFinite(session.teachStep) ? session.teachStep : 0));
  const validCheckKeys = new Set(CHECK_FIELDS.map((entry) => entry.key));
  const storedCheckKeys = Array.isArray(session.teachCheckFieldKeys) ? session.teachCheckFieldKeys : [];
  teachState.checking = Boolean(session.teachChecking) && isValidItemId(teachState.itemId);
  teachState.checkFields = storedCheckKeys
    .filter((key) => typeof key === "string" && validCheckKeys.has(key))
    .map((key) => CHECK_FIELDS.find((entry) => entry.key === key))
    .filter(Boolean);
  teachState.checkField = teachState.checkFields.length ? teachState.checkFields[0] : null;
  teachState.checkDrafts = {};
  if (session.teachCheckDrafts && typeof session.teachCheckDrafts === "object") {
    Object.entries(session.teachCheckDrafts).forEach(([key, value]) => {
      if (!validCheckKeys.has(key) || typeof value !== "string") return;
      teachState.checkDrafts[key] = value;
    });
  }
  teachState.checkRevealed = Boolean(session.teachCheckRevealed) && teachState.checking;
  flashState.itemId = isValidItemId(session.flashItemId) ? session.flashItemId : null;
  flashState.revealed = Boolean(session.flashRevealed);
  testState.itemIds = Array.isArray(session.testItemIds)
    ? session.testItemIds.filter((itemId) => isValidTestItemId(itemId))
    : [];
  if (!testState.itemIds.length) {
    testState.itemIds = defaultTestItemIds();
  }
  testState.fieldKeys = sanitizeTestFieldKeys(session.testFieldKeys);
  if (!testState.fieldKeys.length) {
    testState.fieldKeys = defaultTestFieldKeys();
  }
  testState.imageSelection = typeof session.testImageSelection === "string" ? session.testImageSelection : "";
  const safeIndex = Number.isFinite(session.testIndex) ? session.testIndex : 0;
  testState.index = Math.max(0, Math.min(safeIndex, testState.itemIds.length));
  testState.running = Boolean(session.testRunning) && testState.index < testState.itemIds.length;
  testState.drafts = {};
  if (session.testDrafts && typeof session.testDrafts === "object") {
    Object.entries(session.testDrafts).forEach(([key, value]) => {
      if (!testState.fieldKeys.includes(key) || typeof value !== "string") return;
      testState.drafts[key] = value;
    });
  }
  testState.revealed = Boolean(session.testRevealed) && testState.running;
  testState.correctCount = Math.max(0, Math.min(Number.isFinite(session.testCorrectCount) ? session.testCorrectCount : 0, testState.index));
  testState.wrongItemIds = sanitizeTestItemIds(session.testWrongItemIds);
  dbState.filterDeckId = isValidDbFilterDeckId(session.dbFilterDeckId) ? session.dbFilterDeckId : DB_FILTER_ALL_ID;
  dbState.itemId = isValidItemId(session.dbItemId) ? session.dbItemId : (STUDY_ITEMS[0] ? STUDY_ITEMS[0].id : null);
  dbState.editing = Boolean(session.dbEditing) && isValidItemId(dbState.itemId);
}

function updateLiveViewsForItem(itemId) {
  delete flashThumbCache[itemId];
  delete flashThumbPromiseCache[itemId];
  if (teachState.itemId === itemId) {
    renderTeachCard();
  }
  if (currentMode === "flash") {
    renderFlashGallery();
    renderFlashViewer();
  }
  if (testState.running && testState.itemIds[testState.index] === itemId) {
    renderCustomTestMode();
  }
}

function cardLabel(item) {
  const shortTitle = item.title.length > 54 ? `${item.title.slice(0, 54)}...` : item.title;
  return `${item.id}. ${shortTitle}`;
}

function shortText(value, max = 160) {
  if (!value) return "";
  return value.length > max ? `${value.slice(0, max)}...` : value;
}

function renderDbBrowseList() {
  const activeDeck = getActiveDeck();
  const filterDeck = getDbFilterDeck();
  const browseItems = getDbBrowseItems();
  if (!dbBrowse) return;
  dbBrowse.innerHTML = "";
  if (!browseItems.length) {
    const empty = document.createElement("article");
    empty.className = "db-browse-card";

    const text = document.createElement("div");
    text.className = "db-browse-text";

    const title = document.createElement("p");
    title.className = "db-browse-title";
    title.textContent = filterDeck ? `No cards found in ${filterDeck.name}.` : "No cards available.";

    const detail = document.createElement("p");
    detail.textContent = filterDeck
      ? "Pick a different deck filter or add cards to that deck."
      : "Add cards or change the current database filter.";

    text.appendChild(title);
    text.appendChild(detail);
    empty.appendChild(text);
    dbBrowse.appendChild(empty);
    return;
  }

  browseItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = "db-browse-card";

    const image = document.createElement("img");
    image.className = "db-thumb";
    image.src = getItemImage(item.id);
    image.alt = `Card image for ${item.title}`;

    const text = document.createElement("div");
    text.className = "db-browse-text";

    const title = document.createElement("p");
    title.className = "db-browse-title";
    title.textContent = cardLabel(item);

    const date = document.createElement("p");
    date.textContent = `Date and period: ${getPeriodAndDate(item)}`;

    const maker = document.createElement("p");
    maker.textContent = `Culture / maker: ${shortText(item.maker, 120)}`;

    const medium = document.createElement("p");
    medium.textContent = `Medium: ${shortText(item.medium, 120)}`;

    const importance = document.createElement("p");
    importance.textContent = `Importance: ${shortText(item.importance, 180)}`;

    const editButton = document.createElement("button");
    editButton.className = "primary";
    editButton.textContent = "Edit card";
    editButton.dataset.dbEdit = String(item.id);

    const membershipRow = document.createElement("div");
    membershipRow.className = "db-deck-membership";

    const membershipChip = document.createElement("span");
    membershipChip.className = `db-deck-chip${isItemInActiveDeck(item.id) ? " active" : ""}`;
    membershipChip.textContent = activeDeck.locked
      ? "Included in All cards"
      : (isItemInActiveDeck(item.id) ? `In ${activeDeck.name}` : `Not in ${activeDeck.name}`);

    membershipRow.appendChild(membershipChip);

    if (!activeDeck.locked) {
      const membershipButton = document.createElement("button");
      membershipButton.className = isItemInActiveDeck(item.id) ? "grade bad" : "grade easy";
      membershipButton.textContent = isItemInActiveDeck(item.id) ? "Remove from current deck" : "Add to current deck";
      membershipButton.dataset.dbToggleDeck = String(item.id);
      membershipRow.appendChild(membershipButton);
    }

    text.appendChild(title);
    text.appendChild(date);
    text.appendChild(maker);
    text.appendChild(medium);
    text.appendChild(importance);
    text.appendChild(membershipRow);
    text.appendChild(editButton);

    card.appendChild(image);
    card.appendChild(text);
    dbBrowse.appendChild(card);
  });
}

function openDbEditor(itemId) {
  if (!isValidItemId(itemId) || !dbEditor) return;
  dbState.itemId = itemId;
  dbState.editing = true;
  fillDbForm(itemId);
  if (dbEditingLabel) {
    dbEditingLabel.textContent = `Editing card ${itemId}`;
  }
  dbEditor.classList.remove("hidden");
  dbStatus.textContent = `Editing card ${itemId}`;
  saveState();
}

function closeDbEditor() {
  if (!dbEditor) return;
  dbState.editing = false;
  dbEditor.classList.add("hidden");
  saveState();
}

function fillDbForm(itemId) {
  const item = STUDY_ITEMS.find((entry) => entry.id === itemId);
  if (!item) return;
  dbTitle.value = item.title || "";
  dbPeriodDate.value = getPeriodAndDate(item);
  dbMaker.value = item.maker || "";
  dbMedium.value = item.medium || "";
  dbImportance.value = item.importance || "";
  dbImage.src = getItemImage(item.id);
  dbImage.alt = `Card image for ${item.title || "artwork"}`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read image file."));
    reader.readAsDataURL(file);
  });
}

function optimizeImageDataUrl(dataUrl) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      const maxSide = 1200;
      const ratio = Math.min(1, maxSide / Math.max(image.width, image.height));
      const width = Math.max(1, Math.round(image.width * ratio));
      const height = Math.max(1, Math.round(image.height * ratio));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(dataUrl);
        return;
      }
      ctx.drawImage(image, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", 0.88));
    };
    image.onerror = () => resolve(dataUrl);
    image.src = dataUrl;
  });
}

async function saveDbImageFromFile(file) {
  if (!isValidItemId(dbState.itemId)) return;
  if (!file || !file.type.startsWith("image/")) {
    dbStatus.textContent = "Please choose an image file.";
    return;
  }

  try {
    dbStatus.textContent = "Saving image...";
    const rawDataUrl = await readFileAsDataUrl(file);
    const optimizedDataUrl = await optimizeImageDataUrl(rawDataUrl);
    customImageMap[dbState.itemId] = optimizedDataUrl;
    if (!saveCustomImageMap()) {
      dbStatus.textContent = "Could not save image (browser storage is full).";
      return;
    }

    fillDbForm(dbState.itemId);
    renderDbBrowseList();
    updateLiveViewsForItem(dbState.itemId);
    dbStatus.textContent = `Saved replacement image for card ${dbState.itemId}`;
  } catch (err) {
    dbStatus.textContent = "Could not process this image file.";
  }
}

function renderDbEditor() {
  renderDeckPicker();
  renderDbBrowseList();
  if (dbDeckStatus) {
    dbDeckStatus.textContent = getActiveDeck().locked
      ? 'All cards is active. Create a new deck to manage deck membership.'
      : dbDeckStatus.textContent;
  }
  if (!dbEditor) return;
  if (dbState.editing && isValidItemId(dbState.itemId)) {
    openDbEditor(dbState.itemId);
  } else {
    dbEditor.classList.add("hidden");
  }
}

function saveDbCardEdits() {
  if (!isValidItemId(dbState.itemId)) return;
  const item = STUDY_ITEMS.find((entry) => entry.id === dbState.itemId);
  if (!item) return;

  const periodDate = splitPeriodAndDate(dbPeriodDate.value);
  item.title = dbTitle.value.trim();
  item.date = periodDate.date;
  item.period = periodDate.period;
  item.maker = dbMaker.value.trim();
  item.medium = dbMedium.value.trim();
  item.importance = dbImportance.value.trim();

  saveStudyItems();
  saveState();
  renderDbBrowseList();
  fillDbForm(item.id);
  updateLiveViewsForItem(item.id);
  refreshProgress();
  closeDbEditor();
}

function resetDbCardEdits() {
  if (!isValidItemId(dbState.itemId)) return;
  if (!resetStudyItemFromBase(dbState.itemId)) return;
  saveStudyItems();
  saveState();
  renderDbBrowseList();
  fillDbForm(dbState.itemId);
  updateLiveViewsForItem(dbState.itemId);
  closeDbEditor();
}

function resetDbCardImage() {
  if (!isValidItemId(dbState.itemId)) return;
  if (!resetCustomImage(dbState.itemId)) {
    dbStatus.textContent = "Could not reset image.";
    return;
  }
  fillDbForm(dbState.itemId);
  renderDbBrowseList();
  updateLiveViewsForItem(dbState.itemId);
  dbStatus.textContent = `Reset image for card ${dbState.itemId}`;
}

function resetQuizView() {
  quizContent.classList.add("hidden");
  quizIntro.classList.remove("hidden");
  quizResult.classList.add("hidden");
  quizNext.classList.add("hidden");
  quizBar.style.width = "0%";
  quizFeedback.textContent = "";
  quizState.running = false;
}

function buildQuiz() {
  const deckItems = getActiveDeckItems();
  const fields = ["title", "periodDate", "maker", "medium"];
  const sortedByNeed = deckItems.slice().sort((a, b) => {
    const pa = state.cards[a.id];
    const pb = state.cards[b.id];
    return pa.box - pb.box || a.id - b.id;
  });

  if (!sortedByNeed.length) return [];

  const questions = [];
  while (questions.length < 10) {
    const item = sortedByNeed[questions.length % sortedByNeed.length];
    const field = fields[questions.length % fields.length];
    const correct = getFieldValue(item, field);
    const options = pickOptions(field, correct);
    const image = getItemImage(item.id);
    const fieldLabel = questionFieldLabel(field);
    questions.push({
      itemId: item.id,
      field,
      prompt:
        field === "title"
          ? "Which name matches this artwork?"
          : `Which value best matches this item? (${fieldLabel})`,
      label: fieldLabel,
      image,
      title: item.title,
      correct,
      options,
      answered: false,
    });
  }

  return questions;
}

function questionFieldLabel(field) {
  if (field === "title") return "Name / title";
  if (field === "periodDate") return "Date and period";
  if (field === "maker") return "maker / culture";
  return field;
}

function getFieldValue(item, field) {
  if (field === "periodDate") return getPeriodAndDate(item);
  return item[field] || "";
}

function pickOptions(field, correct) {
  const allValues = [...new Set(getActiveDeckItems().map((item) => getFieldValue(item, field)).filter(Boolean))];
  const pool = allValues.filter((x) => x !== correct);
  shuffle(pool);
  const picks = pool.slice(0, 3);
  while (picks.length < 3) {
    picks.push("(no fixed option)");
  }
  const options = [correct, ...picks];
  shuffle(options);
  return options;
}

function buildQuestionMarkup(question) {
  quizQuestion.textContent = `${question.prompt} ${question.label}`;
  quizImage.src = question.image;
  quizImage.alt = "Quiz artwork prompt image";
  quizChoices.innerHTML = "";
  quizFeedback.textContent = "";
  quizResult.classList.add("hidden");
  quizNext.classList.add("hidden");
  quizQuestion.setAttribute("data-field", question.field);
  quizQuestion.setAttribute("data-item-id", question.itemId);

  question.options.forEach((choice) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-option";
    btn.textContent = choice;
    btn.dataset.choice = choice;
    btn.addEventListener("click", () => answerQuestion(question, choice));
    quizChoices.appendChild(btn);
  });

  const total = quizState.questions.length;
  quizProgressText.textContent = `Question ${quizState.index + 1} of ${total}`;
  const pct = Math.round(((quizState.index) / total) * 100);
  quizBar.style.width = `${pct}%`;
}

function answerQuestion(question, choice) {
  if (question.answered) return;
  question.answered = true;

  const buttons = Array.from(quizChoices.querySelectorAll("button"));
  buttons.forEach((btn) => (btn.disabled = true));

  const correct = question.correct;
  if (choice === correct) {
    quizState.score += 1;
    quizFeedback.textContent = "Correct. Good recall.";
    rateItem(question.itemId, "good");
  } else {
    quizFeedback.textContent = `Not quite. Correct answer: ${correct}`;
    rateItem(question.itemId, "again");
  }

  buttons.forEach((btn) => {
    if (btn.dataset.choice === correct) btn.classList.add("correct");
    if (btn.dataset.choice === choice && choice !== correct) btn.classList.add("wrong");
  });

  quizNext.classList.remove("hidden");
  updateQuizProgress();
}

function updateQuizProgress() {
  const total = quizState.questions.length;
  const pct = Math.round((Math.min(quizState.index + 1, total) / total) * 100);
  quizBar.style.width = `${pct}%`;
}

function nextQuestion() {
  quizState.index += 1;
  saveState();
  refreshProgress();

  if (quizState.index >= quizState.questions.length) {
    quizContent.classList.add("hidden");
    quizResult.classList.remove("hidden");
    quizResult.textContent = `Final score: ${quizState.score} / ${quizState.questions.length}`;
    quizNext.classList.add("hidden");
    startQuiz.textContent = "Take another quiz";
    return;
  }

  buildQuestionMarkup(quizState.questions[quizState.index]);
  quizNext.classList.add("hidden");
  quizIntro.classList.add("hidden");
}

function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

function refreshProgress() {
  const deckItems = getActiveDeckItems();
  const total = deckItems.length;
  const mastered = deckItems.reduce(
    (sum, item) => (state.cards[item.id].box >= MASTERY_BOX_THRESHOLD ? sum + 1 : sum),
    0,
  );

  const percent = total ? Math.round((mastered / total) * 100) : 0;
  masteryBar.style.width = `${percent}%`;
  masteryText.textContent = total
    ? `${mastered} of ${total} items mostly mastered in ${getActiveDeck().name}`
    : `No cards in ${getActiveDeck().name} yet`;

  const circumference = 2 * Math.PI * 52;
  ringText.textContent = `${percent}%`;
  ringProgress.style.strokeDasharray = `${circumference}`;
  ringProgress.style.strokeDashoffset = `${circumference - (percent / 100) * circumference}`;

  dueText.textContent = `Tracking progress for ${getActiveDeck().name}.`;
  dueSoonText.textContent = total
    ? "No visible due numbers, only pacing for better recall."
    : "Add cards to this deck in the database tab to start studying.";

  sessionInfo.textContent = total
    ? `Mastery rating updates in the background for ${getActiveDeck().name}.`
    : "This deck is empty.";
}

function init() {
  applyStateCorrections();
  ensureDeckStateValidity();

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  if (deckSelect) {
    deckSelect.addEventListener("change", (event) => {
      switchDeck(event.currentTarget.value);
    });
  }

  if (flashBrowse) {
    flashBrowse.addEventListener("click", (event) => {
      const target = event.target.closest("[data-flash-item]");
      if (!target) return;
      selectFlashItem(Number(target.dataset.flashItem));
    });
  }
  if (flashViewerFlip) {
    flashViewerFlip.addEventListener("click", toggleFlashReveal);
  }
  if (flashPrev) {
    flashPrev.addEventListener("click", () => stepFlashItem(-1));
  }
  if (flashNext) {
    flashNext.addEventListener("click", () => stepFlashItem(1));
  }
  window.addEventListener("keydown", (event) => {
    if (currentMode !== "flash") return;
    const tagName = event.target && event.target.tagName ? event.target.tagName.toUpperCase() : "";
    if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT" || (event.target && event.target.isContentEditable)) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepFlashItem(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      stepFlashItem(1);
    }
  });

  teachReveal.addEventListener("click", revealTeachStep);
  document.querySelectorAll("[data-grade]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      rateItem(teachState.itemId, e.currentTarget.dataset.grade);
    });
  });

  if (testStart) {
    testStart.addEventListener("click", beginCustomTest);
  }
  if (testReset) {
    testReset.addEventListener("click", resetCustomTest);
  }
  if (testFieldOptions) {
    testFieldOptions.addEventListener("change", () => {
      const selected = sanitizeTestFieldKeys(selectedTestFieldKeysFromUi());
      testState.fieldKeys = selected.length ? selected : [];
      if (testSetupStatus) testSetupStatus.textContent = "";
      saveState();
    });
  }
  if (testImageNumbers) {
    testImageNumbers.addEventListener("input", () => {
      testState.imageSelection = testImageNumbers.value || "";
      if (testSetupStatus) testSetupStatus.textContent = "";
      saveState();
    });
  }
  if (testInputs) {
    testInputs.addEventListener("input", (event) => {
      const target = event.target;
      if (!target || target.tagName !== "TEXTAREA") return;
      const field = target.dataset.testField;
      if (!field) return;
      testState.drafts[field] = target.value || "";
      saveState();
    });
  }
  if (testReveal) {
    testReveal.addEventListener("click", revealCustomTestAnswer);
  }
  if (testFail) {
    testFail.addEventListener("click", (e) => {
      submitCustomTestResult(false, e.currentTarget);
    });
  }
  if (testPass) {
    testPass.addEventListener("click", (e) => {
      submitCustomTestResult(true, e.currentTarget);
    });
  }
  if (testRetryWrong) {
    testRetryWrong.addEventListener("click", retryCustomTestWrongOnly);
  }

  teachCheckReveal.addEventListener("click", revealTeachCheckAnswer);
  if (teachCheckFields) {
    teachCheckFields.addEventListener("input", (event) => {
      const target = event.target;
      if (!target || target.tagName !== "TEXTAREA") return;
      const field = target.dataset.field;
      if (!field) return;
      teachState.checkDrafts[field] = target.value || "";
      saveState();
    });
  }
  document.querySelectorAll("[data-check-grade]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      submitTeachCheck(e.currentTarget.dataset.checkGrade === "pass", e.currentTarget);
    });
  });

  startQuiz.addEventListener("click", () => {
    quizState.running = true;
    quizState.questions = buildQuiz();
    if (!quizState.questions.length) {
      quizState.running = false;
      quizIntro.classList.remove("hidden");
      quizContent.classList.add("hidden");
      quizResult.classList.remove("hidden");
      quizResult.textContent = "This deck has no cards to quiz yet.";
      return;
    }
    quizState.index = 0;
    quizState.score = 0;

    quizIntro.classList.add("hidden");
    quizContent.classList.remove("hidden");
    quizResult.classList.add("hidden");
    buildQuestionMarkup(quizState.questions[0]);
  });

  quizNext.addEventListener("click", nextQuestion);

  if (dbBrowse) {
    dbBrowse.addEventListener("click", (event) => {
      const toggleTarget = event.target.closest("[data-db-toggle-deck]");
      if (toggleTarget) {
        toggleItemInActiveDeck(Number(toggleTarget.dataset.dbToggleDeck));
        return;
      }
      const target = event.target.closest("[data-db-edit]");
      if (!target) return;
      openDbEditor(Number(target.dataset.dbEdit));
    });
  }

  if (dbCreateDeck) {
    dbCreateDeck.addEventListener("click", createDeckFromInput);
  }

  if (dbFilterDeck) {
    dbFilterDeck.addEventListener("change", (event) => {
      const nextFilterId = event.currentTarget.value;
      dbState.filterDeckId = isValidDbFilterDeckId(nextFilterId) ? nextFilterId : DB_FILTER_ALL_ID;
      saveState();
      renderDbBrowseList();
    });
  }

  if (dbRenameDeck) {
    dbRenameDeck.addEventListener("click", renameActiveDeck);
  }

  if (dbDeleteDeck) {
    dbDeleteDeck.addEventListener("click", deleteActiveDeck);
  }

  if (dbSave) {
    dbSave.addEventListener("click", saveDbCardEdits);
  }

  if (dbReset) {
    dbReset.addEventListener("click", resetDbCardEdits);
  }

  if (dbCancelEdit) {
    dbCancelEdit.addEventListener("click", closeDbEditor);
  }

  if (dbPickImage && dbImageInput) {
    dbPickImage.addEventListener("click", () => {
      dbImageInput.click();
    });
    dbImageInput.addEventListener("change", async (event) => {
      const file = event.currentTarget.files && event.currentTarget.files[0];
      if (file) {
        await saveDbImageFromFile(file);
      }
      dbImageInput.value = "";
    });
  }

  if (dbResetImage) {
    dbResetImage.addEventListener("click", resetDbCardImage);
  }

  if (dbDropzone) {
    dbDropzone.addEventListener("click", () => {
      if (dbImageInput) dbImageInput.click();
    });
    dbDropzone.addEventListener("dragover", (event) => {
      event.preventDefault();
      dbDropzone.classList.add("drag-active");
    });
    dbDropzone.addEventListener("dragleave", () => {
      dbDropzone.classList.remove("drag-active");
    });
    dbDropzone.addEventListener("drop", async (event) => {
      event.preventDefault();
      dbDropzone.classList.remove("drag-active");
      const file = event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0];
      if (file) {
        await saveDbImageFromFile(file);
      }
    });
  }

  restoreSessionFromState();
  syncStateToActiveDeck();
  renderDeckPicker();
  refreshProgress();
  setMode(currentMode, { preserveTeachState: true });
}

init();
