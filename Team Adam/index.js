const menuToggle = document.querySelector('.toggle');
  const showcase = document.querySelector('.showcase');

  menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
  })

  let quotes = [{ "quote": `Truth Alone Triumphs`, "writer": "NIT Trichy" },
      { "quote": `Knowledge Is The Supreme Power`, "writer": "	NIT Agartala" },
      { "quote": `Success Is Born Out Of Action`, "writer": "	NIT Allahabad" },
      { "quote": `Labour Triumphs`, "writer": "  NIT Andhra Pradesh" },
      { "quote": `Certainly There Is No Purifier In This World Like Knowledge`, "writer": "  NIT Arunachal Pradesh" },
      { "quote": `Vidya Param Bhushanam`, "writer": "  NIT Bhopal" },
      { "quote": `From Darkness, Lead Us Into Light`, "writer": "	NIT Calicut" },
      { "quote": `Work Maketh A Man`, "writer": "  NIT Durgapur" },
      { "quote": `True Knowledge Liberates`, "writer": "  NIT Goa" },
      { "quote": `No Substitute For Hard Work`, "writer": "  NIT Hamirpur" },
      { "quote": `Diligence Leads To Excellence`, "writer": "  NIT Jaipur" },
      { "quote": `Hail Sarasvati`, "writer": "  NIT Jalandhar" },
      { "quote": `Work Is Worship`, "writer": "	 NIT Karnataka" },
      { "quote": `Hard Work And Consistent Efforts`, "writer": "  NIT Kurukshetra" },
      { "quote": `Knowledge Is The Ultimate Goal`, "writer": "	NIT Mizoram" },
      { "quote": `Education Is Power`, "writer": "  NIT Nagaland" },
      { "quote": `Hard Work And Consistent Efforts`, "writer": "  NIT Patna" },
      { "quote": `Excellence In Action`, "writer": "	NIT Nagpur" },
      { "quote": `Let The Rise Of Goodness Happen Every Day`, "writer": "	NIT Raipur" },
      { "quote": `Move On`, "writer": "NIT Sikkim" },
      { "quote": "May Our Education Be Brilliant And Radiant", "writer": "  NIT Silchar" },
      { "quote": "Lead Me From Darkness To Light", "writer": "  NIT Srinagar" },
      { "quote": "Charioteer Of Science", "writer": "	 NIT Surat" },
      { "quote": `Knowledge Is Maintained Through Practice And Hardship`, "writer": "  NIT Uttarakhand" }
  ];
  let quotedisplay = document.querySelector('.quote');
  let writerdisplay = document.querySelector('.writer');
  let currentdate = new Date;
  let currentsec = currentdate.getSeconds();
  let changedsec = currentsec;
  let random = 1;
  let value = changedsec;
  setInterval(() => value = value + 1, 400)
  setInterval(() => {
      changedsec++;
      if (Math.abs(changedsec - currentsec) % 8 == 0) {
          quotedisplay.style.opacity = 0;
          writerdisplay.style.opacity = 0;
      }
      if (Math.abs(changedsec - currentsec) % 8 == 1) {
          quotedisplay.innerHTML = `"${quotes[value%24].quote}"`;
          writerdisplay.innerHTML = `~${quotes[value%24].writer}`;
          quotedisplay.style.opacity = 1;
          writerdisplay.style.opacity = 1;
      }
  }, 1000)

  let quotesiit = [{ "quote": `Arise, Awake, Strive For The Highest And Be In The Light`, "writer": "IIT (ISM) Dhanbad" },
      { "quote": `Knowledge Is One That Liberates`, "writer": "	IIT Dharwad" },
      { "quote": `Knowledge Is Power`, "writer": " IIT Guwahati" },
      { "quote": `Inventions And Innovations`, "writer": "IIT Hyderabad" },
      { "quote": `Knowledge Is For The Well-Being Of Everyone`, "writer": "	IIT Indore" },
      { "quote": `You Are The Entire Knowledge And Scienc`, "writer": " IIT Jodhpur" },
      { "quote": `Knowledge Is Supreme Of All Wealth`, "writer": "	IIT Jammu" },
      { "quote": `From Darkness, Lead Me To Light`, "writer": "IIT Kanpur" },
      { "quote": `Yogah Karmasu Kaushalam`, "writer": "	IIT Kharagpur" },
      { "quote": `Success Is Born Out Of Action`, "writer": "IIT Madras" },
      { "quote": `Scaling The Heights!`, "writer": "IIT Mandi" },
      { "quote": `One Who Aspires Wisdom, Attains It`, "writer": " IIT Patna" },
      { "quote": `Nothing Can Be Achieved Without Hard Work`, "writer": "		IIT Roorkee" },
      { "quote": `Guide In The Right Direction`, "writer": "IIT Ropar" },
      { "quote": `Together We Grow`, "writer": "	IIIT Allahbad" },
      { "quote": `Promoting research, innovation and fostering human values`, "writer": "IIIT Hyderabad" },
      { "quote": `Leading Technology Leveraging Technology`, "writer": "IIIT Pune" },
      { "quote": `Learning By Doing`, "writer": "	IIIT Kancheepuram" },
      { "quote": `Generating knowledge for tomorrow`, "writer": "	IIIT Kottayam" },
      { "quote": `Work is Worship`, "writer": "IIIT Kota" },
      { "quote": "Vidya dadati Vinayam, Vinaya dadati patratam", "writer": "IIIT Lucknow" },
      { "quote": "Progress and Service", "writer": "IIIT Vadodara" },
      { "quote": "Knowledge is elixir for the world", "writer": "	IIITM Gwalior" },
      { "quote": `Knowledge and Hard Work are always revered`, "writer": "IIIT Surat" },
      { "quote": `Tejaswi Naav Dweetmastu`, "writer": "IIIT Sonipat" },
      { "quote": `Knowledge Is Power`, "writer": "IIIT Guwahati" },
      { "quote": `Knowledge is Supreme`, "writer": "IIIT Banglore" }
  ];
  let quotedisplayed = document.querySelector('.quotes');
  let writerdisplayed = document.querySelector('.writers');
  let currentdates = new Date;
  let currentsecs = currentdates.getSeconds();
  let changedsecs = currentsecs;
  let randoms = 1;
  let values = changedsecs;
  setInterval(() => values = values + 1, 400)
  setInterval(() => {
      changedsecs++;
      if (Math.abs(changedsecs - currentsecs) % 8 == 0) {
          quotedisplayed.style.opacity = 0;
          writerdisplayed.style.opacity = 0;
      }
      if (Math.abs(changedsecs - currentsecs) % 8 == 1) {
          quotedisplayed.innerHTML = `"${quotesiit[value%27].quote}"`;
          writerdisplayed.innerHTML = `~${quotesiit[value%27].writer}`;
          quotedisplayed.style.opacity = 1;
          writerdisplayed.style.opacity = 1;
      }
  }, 1000)