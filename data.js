const ISLANDS = [
  {
    slug: 'santorini',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Santorini', el: 'Σαντορίνη' },
    tagline: { en: 'Volcanic caldera views', el: 'Θέα στην ηφαιστειογενή καλντέρα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Santorini%2C_Oia_32.jpg?width=1400',
    credit: 'LBM1948, CC BY-SA 4.0',
    desc: {
      en: 'Santorini is built along the rim of a collapsed volcanic caldera, with whitewashed villages perched hundreds of metres above the sea. Oia is famous for its sunsets, while Fira offers lively cafés and cable-car views over the crater.',
      el: 'Η Σαντορίνη είναι χτισμένη στα χείλη μιας βυθισμένης ηφαιστειακής καλντέρας, με ασβεστωμένα χωριά χτισμένα εκατοντάδες μέτρα πάνω από τη θάλασσα. Η Οία φημίζεται για τα ηλιοβασιλέματά της, ενώ τα Φηρά προσφέρουν ζωντανά καφέ και θέα στον κρατήρα από το τελεφερίκ.'
    },
    more: {
      en: 'Most visitors arrive by ferry into the old port below Fira, then take the cable car or a mule path up the cliff. Away from the caldera rim, inland villages such as Pyrgos and Megalochori feel far quieter, and Santorini\'s volcanic soil produces distinctive wines, especially the dry white Assyrtiko.',
      el: 'Οι περισσότεροι επισκέπτες φτάνουν με πλοίο στο παλιό λιμάνι κάτω από τα Φηρά και ανεβαίνουν με το τελεφερίκ ή με μονοπάτι με τα μουλάρια. Μακριά από τα χείλη της καλντέρας, χωριά της ενδοχώρας όπως ο Πύργος και το Μεγαλοχώρι είναι πολύ πιο ήσυχα, ενώ το ηφαιστειογενές έδαφος του νησιού δίνει ξεχωριστά κρασιά, ιδίως τον ξηρό λευκό Ασύρτικο.'
    },
    more2: {
      en: 'Boat tours out to the still-active volcanic islet of Nea Kameni let visitors walk across dark volcanic rock and swim in naturally warm water nearby, while the excavated Bronze Age settlement of Akrotiri, buried by the same eruption that helped shape the caldera, is sometimes described as Greece\'s answer to Pompeii. Ferries and short flights connect Santorini to Athens and to nearby islands including Naxos, Paros and Ios, making it a common stop on longer Cyclades itineraries.',
      el: 'Βαρκάδες προς τη νησίδα Νέα Καμένη, που παραμένει ηφαιστειακά ενεργή, επιτρέπουν στους επισκέπτες να περπατήσουν πάνω σε σκούρο ηφαιστειακό βράχο και να κολυμπήσουν σε φυσικά ζεστά νερά εκεί κοντά, ενώ ο ανασκαμμένος οικισμός της Εποχής του Χαλκού στο Ακρωτήρι, θαμμένος από την ίδια έκρηξη που βοήθησε να διαμορφωθεί η καλντέρα, περιγράφεται μερικές φορές ως η ελληνική εκδοχή της Πομπηίας. Πλοία και σύντομες πτήσεις συνδέουν τη Σαντορίνη με την Αθήνα και με κοντινά νησιά όπως η Νάξος, η Πάρος και η Ίος, καθιστώντας την συχνή στάση σε μεγαλύτερα δρομολόγια στις Κυκλάδες.'
    },
    best: { en: 'April–October, quietest in May, June & September', el: 'Απρίλιος–Οκτώβριος, πιο ήσυχα τον Μάιο, Ιούνιο & Σεπτέμβριο' },
    highlights: {
      en: ['Sunset in Oia', 'Caldera-view villages', 'Volcanic black-sand beaches', 'Assyrtiko wine tasting', 'Boat trip to Nea Kameni volcano', 'Akrotiri Bronze Age site'],
      el: ['Ηλιοβασίλεμα στην Οία', 'Χωριά με θέα στην καλντέρα', 'Ηφαιστειογενείς μαύρες παραλίες', 'Γευσιγνωσία Ασύρτικου', 'Βαρκάδα στο ηφαίστειο Νέα Καμένη', 'Οικισμός Ακρωτηρίου της Εποχής του Χαλκού']
    },
    sweet: { en: ['Kopania', 'Melitinia'], el: ['Κοπανιά', 'Μελιτίνια'] }
  },
  {
    slug: 'mykonos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Mykonos', el: 'Μύκονος' },
    tagline: { en: 'Cosmopolitan island life', el: 'Κοσμοπολίτικο νησί' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Little_Venice%2C_Mykonos.jpg?width=1400',
    credit: 'Bgag, CC BY-SA 3.0',
    desc: {
      en: 'Mykonos pairs whitewashed alleyways and iconic windmills with some of the liveliest nightlife in Greece. Little Venice, with its balconies over the water, is the classic postcard view of the island.',
      el: 'Η Μύκονος συνδυάζει ασβεστωμένα σοκάκια και εμβληματικούς ανεμόμυλους με μια από τις πιο ζωντανές νυχτερινές ζωές της Ελλάδας. Η Μικρή Βενετία, με τα μπαλκόνια πάνω από το νερό, είναι η κλασική εικόνα-καρτ ποστάλ του νησιού.'
    },
    more: {
      en: 'Beyond Mykonos Town (Chora), the island\'s south coast holds its best-known beaches, from family-friendly Ornos to the party scene at Paradise and Super Paradise. The nearby islet of Delos, a UNESCO World Heritage archaeological site, is an easy day trip by boat.',
      el: 'Πέρα από τη Χώρα, η νότια ακτή του νησιού κρύβει τις πιο γνωστές παραλίες του, από τον οικογενειακό Ορνό μέχρι τη σκηνή πάρτι στο Paradise και το Super Paradise. Η κοντινή Δήλος, αρχαιολογικός χώρος παγκόσμιας κληρονομιάς της UNESCO, είναι μια εύκολη ημερήσια εκδρομή με βάρκα.'
    },
    more2: {
      en: 'Mykonos Town\'s Chora is deliberately maze-like, with narrow whitewashed lanes originally laid out to confuse pirate raiders, and today lined with boutiques, galleries and restaurants. The island has also become known for high-end beach clubs with restaurant service and DJ sets by day, a style of beach tourism that spread to other parts of the Mediterranean after taking hold here.',
      el: 'Η Χώρα της Μυκόνου είναι σκόπιμα σχεδιασμένη σαν λαβύρινθος, με στενά ασβεστωμένα δρομάκια που αρχικά είχαν σχεδιαστεί για να μπερδεύουν πειρατές, και σήμερα είναι γεμάτα με μπουτίκ, γκαλερί και εστιατόρια. Το νησί έχει επίσης γίνει γνωστό για πολυτελή beach clubs με σερβίρισμα εστιατορίου και DJ sets την ημέρα, ένα στιλ παραθαλάσσιου τουρισμού που εξαπλώθηκε και σε άλλα σημεία της Μεσογείου αφού πρωτοεμφανίστηκε εδώ.'
    },
    best: { en: 'May–September, peak nightlife July–August', el: 'Μάιος–Σεπτέμβριος, αιχμή νυχτερινής ζωής Ιούλιος–Αύγουστος' },
    highlights: {
      en: ['Little Venice', 'Windmills of Kato Mili', 'Beach clubs at Paradise & Super Paradise', 'Day trip to Delos', 'Chora\'s maze-like old town', 'Panagia Paraportiani church'],
      el: ['Μικρή Βενετία', 'Ανεμόμυλοι Κάτω Μύλοι', 'Beach clubs στο Paradise & Super Paradise', 'Ημερήσια εκδρομή στη Δήλο', 'Λαβυρινθώδης παλιά πόλη της Χώρας', 'Εκκλησία Παναγία Παραπορτιανή']
    },
    sweet: { en: ['Amygdalota'], el: ['Αμυγδαλωτά'] }
  },
  {
    slug: 'naxos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Naxos', el: 'Νάξος' },
    tagline: { en: 'The largest Cycladic island', el: 'Το μεγαλύτερο νησί των Κυκλάδων' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/GR-naxos-chora-pano_%28cropped%29.jpg?width=1400',
    credit: 'Bgabel, CC BY-SA 3.0',
    desc: {
      en: 'Naxos combines sandy beaches with a mountainous, traditional interior of stone villages. The marble Portara gate, standing alone at the harbour entrance, is the island\'s best-known landmark.',
      el: 'Η Νάξος συνδυάζει αμμουδερές παραλίες με μια ορεινή, παραδοσιακή ενδοχώρα με πέτρινα χωριά. Η μαρμάρινη Πορτάρα, που στέκεται μόνη της στην είσοδο του λιμανιού, είναι το πιο γνωστό ορόσημο του νησιού.'
    },
    more: {
      en: 'Inland, the road climbs through olive and citrus groves to villages like Halki and Apeiranthos, where marble streets and Venetian towers recall the island\'s medieval past. Naxos is also known across Greece for its potatoes, cheese and Kitron liqueur.',
      el: 'Στην ενδοχώρα, ο δρόμος ανεβαίνει μέσα από ελαιώνες και εσπεριδοειδή προς χωριά όπως το Χαλκί και ο Απείρανθος, όπου μαρμάρινοι δρόμοι και ενετικοί πύργοι θυμίζουν το μεσαιωνικό παρελθόν του νησιού. Η Νάξος είναι επίσης γνωστή σε όλη την Ελλάδα για τις πατάτες, το τυρί και το λικέρ Κίτρο της.'
    },
    more2: {
      en: 'The island is dominated by Mount Zas, the highest peak in the Cyclades, which according to local myth was the childhood home of Zeus. Archaeological treasures include the Kouros statues lying unfinished in ancient quarries, while the long western coastline features vast sandy beaches with ideal wind conditions for windsurfing and kitesurfing.',
      el: 'Στο νησί δεσπόζει το όρος Ζας, η ψηλότερη κορυφή των Κυκλάδων, που σύμφωνα με τον τοπικό μύθο ήταν η παιδική κατοικία του Δία. Στους αρχαιολογικούς θησαυρούς περιλαμβάνονται τα αγάλματα των Κούρων που βρίσκονται ημιτελή σε αρχαία λατομεία, ενώ η μεγάλη δυτική ακτογραμμή διαθέτει απέραντες αμμουδιές με ιδανικές συνθήκες αέρα για windsurfing και kitesurfing.'
    },
    best: { en: 'June–September for beaches, spring for hiking in the villages', el: 'Ιούνιος–Σεπτέμβριος για παραλίες, άνοιξη για πεζοπορία στα χωριά' },
    highlights: {
      en: ['Portara gate', 'Mountain villages of Apeiranthos & Halki', 'Plaka & Agios Prokopios beaches', 'Local Kitron liqueur', 'Mount Zas hiking trail', 'Unfinished Kouros statues'],
      el: ['Πορτάρα', 'Ορεινά χωριά Απείρανθος & Χαλκί', 'Παραλίες Πλάκα & Άγιος Προκόπιος', 'Τοπικό λικέρ Κίτρο', 'Μονοπάτι πεζοπορίας στο όρος Ζας', 'Ημιτελείς Κούροι']
    },
    sweet: { en: ['Melachrino'], el: ['Μελαχρινό'] }
  },
  {
    slug: 'paros',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Paros', el: 'Πάρος' },
    tagline: { en: 'Traditional Cycladic villages', el: 'Παραδοσιακά κυκλαδίτικα χωριά' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kastro_in_Parikia_on_Paros%2C_075822.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Paros is known for the Kastro quarter in Parikia, built partly from stones of an ancient temple, and for well-preserved villages like Lefkes and Naoussa, a former fishing harbour turned relaxed evening hub.',
      el: 'Η Πάρος είναι γνωστή για τη συνοικία του Κάστρου στην Παροικιά, χτισμένη εν μέρει με πέτρες από αρχαίο ναό, καθώς και για καλοδιατηρημένα χωριά όπως η Λεύκες και η Νάουσα, ένα παλιό ψαράδικο λιμανάκι που σήμερα ζωντανεύει τα βράδια.'
    },
    more: {
      en: 'Paros sits at the centre of the Cyclades ferry network, making it a convenient base for island hopping. Its beaches range from the windsurfing spot of Golden Beach to quieter coves near Aliki, and Parian marble was prized by ancient sculptors for its translucent quality.',
      el: 'Η Πάρος βρίσκεται στο κέντρο του δικτύου ακτοπλοϊκών γραμμών των Κυκλάδων, γεγονός που την κάνει βολική βάση για island hopping. Οι παραλίες της κυμαίνονται από το σημείο για windsurfing στη Χρυσή Ακτή μέχρι πιο ήσυγχους κολπίσκους κοντά στην Αλυκή, ενώ το παριανό μάρμαρο ήταν περιζήτητο από τους αρχαίους γλύπτες για τη διαφάνειά του.'
    },
    more2: {
      en: 'In Parikia stands the historic Panagia Ekatontapiliani (Church of 100 Doors), one of the best-preserved early Christian monuments in Greece. Just a short 7-minute ferry ride across the channel lies the peaceful satellite island of Antiparos, famous for its impressive cave and serene beaches.',
      el: 'Στην Παροικιά δεσπόζει η ιστορική Παναγία η Εκατονταπυλιανή, ένα από τα σημαντικότερα και καλοδιατηρημένα παλαιοχριστιανικά μνημεία στην Ελλάδα. Σε απόσταση μόλις 7 λεπτών με το καραβάκι βρίσκεται το ήσυχο νησάκι της Αντιπάρου, φημισμένο για το εντυπωσιακό σπήλαιό του και τις ήρεμες παραλίες.'
    },
    best: { en: 'June–September, ferries connect easily to nearby islands', el: 'Ιούνιος–Σεπτέμβριος, εύκολη σύνδεση με πλοία προς κοντινά νησιά' },
    highlights: {
      en: ['Kastro quarter, Parikia', 'Naoussa harbour', 'Lefkes mountain village', 'Golden Beach windsurfing', 'Panagia Ekatontapiliani church', 'Day trip to Antiparos'],
      el: ['Κάστρο, Παροικιά', 'Λιμάνι Νάουσας', 'Ορεινό χωριό Λεύκες', 'Windsurfing στη Χρυσή Ακτή', 'Παναγία Εκατονταπυλιανή', 'Ημερήσια εκδρομή στην Αντίπαρο']
    },
    sweet: { en: ['Rafiolia'], el: ['Ραφιόλια'] }
  },
  {
    slug: 'milos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Milos', el: 'Μήλος' },
    tagline: { en: 'Moon-like volcanic coastline', el: 'Σεληνιακή ηφαιστειογενής ακτογραμμή' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sarakiniko_Beach_on_the_island_of_Milos%2C_Greece.jpg?width=1400',
    credit: 'dronepicr, CC BY 2.0',
    desc: {
      en: 'Milos is shaped by its volcanic past, nowhere more strikingly than at Sarakiniko, a beach of smooth white rock that looks almost lunar. The island counts more than 70 beaches around its coastline.',
      el: 'Η Μήλος είναι διαμορφωμένη από το ηφαιστειογενές παρελθόν της, πουθενά πιο εντυπωσιακά απ\' ό,τι στο Σαρακήνικο, μια παραλία από λείο λευκό βράχο που μοιάζει σχεδόν σεληνιακή. Το νησί μετρά πάνω από 70 παραλίες γύρω από την ακτογραμμή του.'
    },
    more: {
      en: 'The island\'s capital, Plaka, sits above the water on a hillside crowned by a Venetian castle, and the nearby archaeological museum tells the story of the Venus de Milo statue, found on the island in 1820. Fishing villages like Klima have small boat garages built directly into the rock, painted in bright colours.',
      el: 'Η πρωτεύουσα του νησιού, η Πλάκα, βρίσκεται πάνω από το νερό σε μια πλαγιά που στέφεται από ενετικό κάστρο, ενώ το κοντινό αρχαιολογικό μουσείο αφηγείται την ιστορία του αγάλματος της Αφροδίτης της Μήλου, που βρέθηκε στο νησί το 1820. Ψαροχώρια όπως το Κλήμα έχουν μικρά υπόστεγα για βάρκες σκαλισμένα απευθείας στον βράχο, βαμμένα σε έντονα χρώματα.'
    },
    more2: {
      en: 'The island features rich mineral diversity that dates back to antiquity, creating unique landscapes like the colorful rock formations at Tsigrado and Fyriplaka beaches. Below Plaka lie the Catacombs of Milos, among the oldest early Christian burial sites in the world, alongside an ancient Roman theatre overlooking the sea.',
      el: 'Το νησί διαθέτει πλούσιο ορυκτό πλούτο που χρονολογείται από την αρχαιότητα, δημιουργώντας μοναδικά τοπία όπως οι πολύχρωμοι βραχώδεις σχηματισμοί στις παραλίες Τσιγκράδο και Φυριπλάκα. Κάτω από την Πλάκα βρίσκονται οι Κατακόμβες της Μήλου, από τα αρχαιότερα παλαιοχριστιανικά μνημεία ταφής στον κόσμο, μαζί με ένα αρχαίο ρωμαϊκό θέατρο με θέα τη θάλασσα.'
    },
    best: { en: 'June–September for swimming, boat tours run all summer', el: 'Ιούνιος–Σεπτέμβριος για μπάνιο, βαρκάδες όλο το καλοκαίρι' },
    highlights: {
      en: ['Sarakiniko beach', 'Kleftiko sea caves by boat', 'Plaka village & castle view', 'Klima fishing village', 'Catacombs of Milos', 'Tsigrado & Fyriplaka beaches'],
      el: ['Παραλία Σαρακήνικο', 'Σπηλιές Κλέφτικο με βάρκα', 'Χωριό Πλάκα & θέα από το κάστρο', 'Ψαροχώρι Κλήμα', 'Κατακόμβες της Μήλου', 'Παραλίες Τσιγκράδο & Φυριπλάκα']
    },
    sweet: { en: ['Koufelia'], el: ['Κουφέλια'] }
  },
  {
    slug: 'ios',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Ios', el: 'Ίος' },
    tagline: { en: 'Beaches and a lively Chora', el: 'Παραλίες και ζωντανή Χώρα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ios_island%2C_Cyclades%2C_Greece_hill_2007.jpg?width=1400',
    credit: 'Flickr upload bot, CC BY-SA 2.0',
    desc: {
      en: 'Ios is best known for its beaches and its hillside Chora, a maze of whitewashed lanes that fills with bars and small restaurants after sunset. The port of Ios lies below, connected to Chora by a short uphill walk or a local bus.',
      el: 'Η Ίος είναι πιο γνωστή για τις παραλίες της και τη Χώρα της στην πλαγιά, έναν λαβύρινθο ασβεστωμένων δρομάκων που γεμίζει με μπαρ και μικρά εστιατόρια μετά το ηλιοβασίλεμα. Το λιμάνι της Ίου βρίσκεται πιο κάτω, με σύντομη ανηφορική διαδρομή ή τοπικό λεωφορείο μέχρι τη Χώρα.'
    },
    more: {
      en: 'Long popular with younger travellers for its nightlife, Ios has quieted down in recent years while keeping a strong beach-holiday identity, with Mylopotas among the most popular stretches of sand for swimming and water sports.',
      el: 'Δημοφιλής εδώ και χρόνια στους νεότερους ταξιδιώτες για τη νυχτερινή ζωή της, η Ίος έχει ηρεμήσει τα τελευταία χρόνια διατηρώντας παράλληλα έντονη ταυτότητα διακοπών με παραλία, με τον Μυλοπόταμο να ξεχωρίζει ως μία από τις πιο δημοφιλείς αμμουδιές για μπάνιο και θαλάσσια σπορ.'
    },
    more2: {
      en: 'On the northern hill of Plakoto sits a marble structure locally revered as Homer\'s Tomb, ancient tradition claiming the epic poet spent his final days on the island. Nearby, the prehistoric site of Skarkos reveals a beautifully preserved Bronze Age settlement that shows Ios was a major trading hub thousands of years ago.',
      el: 'Στον βόρειο λόφο του Πλακωτού βρίσκεται ένα μαρμάρινο μνημείο που η τοπική παράδοση θεωρεί ως τον Τάφο του Ομήρου, καθώς λέγεται ότι ο ποιητής πέρασε εκεί τις τελευταίες μέρες του. Κοντά εκεί, ο προϊστορικός οικισμός του Σκάρκου αποκαλύπτει μια εξαιρετικά διατηρημένη εγκατάσταση της Εποχής του Χαλκού.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Chora nightlife', 'Mylopotas beach', 'Kastro ruins above Chora', 'Theodoti & Manganari beaches', "Homer's Tomb at Plakoto", 'Prehistoric site of Skarkos'],
      el: ['Νυχτερινή ζωή στη Χώρα', 'Παραλία Μυλοπόταμος', 'Ερείπια Κάστρου πάνω από τη Χώρα', 'Παραλίες Θεοδότη & Μαγγανάρι', 'Τάφος του Ομήρου στο Πλακωτό', 'Προϊστορικός οικισμός Σκάρκου']
    },
    sweet: { en: ['Amygdalota'], el: ['Αμυγδαλωτά'] }
  },
  {
    slug: 'sifnos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Sifnos', el: 'Σίφνος' },
    tagline: { en: 'Ceramics and Cycladic cooking', el: 'Κεραμική και κυκλαδίτικη κουζίνα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kastro%2C_Sifnos.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Sifnos has a long pottery tradition and a reputation as one of the best places in Greece to eat, with small tavernas serving slow-cooked dishes in clay pots. The fortified village of Kastro, the island\'s medieval capital, sits on a cliff above the sea.',
      el: 'Η Σίφνος έχει μακρά παράδοση στην κεραμική και φήμη ως ένα από τα καλύτερα μέρη στην Ελλάδα για φαγητό, με μικρές ταβέρνες που σερβίρουν φαγητά σε πήλινα σκεύη μαγειρεμένα σιγά-σιγά. Το οχυρωμένο χωριό Κάστρο, η μεσαιωνική πρωτεύουσα του νησιού, βρίσκεται πάνω σε έναν γκρεμό πάνω από τη θάλασσα.'
    },
    more: {
      en: 'A network of old walking paths connects Sifnos\' villages and its many small monasteries, making it a popular island for hikers as well as beach-goers. Apollonia, the modern capital, is built across three hills and stays lively well into the evening.',
      el: 'Ένα δίκτυο παλιών μονοπατιών συνδέει τα χωριά της Σίφνου και τα πολλά μικρά μοναστήρια της, καθιστώντας το ένα δημοφιλές νησί τόσο για πεζοπόρους όσο και για λάτρεις της παραλίας. Η Απολλωνία, η σημερινή πρωτεύουσα, είναι χτισμένη σε τρεις λόφους και παραμένει ζωντανή μέχρι αργά το βράδυ.'
    },
    more2: {
      en: 'Sifnos is the birthplace of Nikolaos Tselementes, the chef who modernized early 20th-century Greek gastronomy, cementing the island\'s culinary identity. Signature local recipes include revithada (chickpea stew baked overnight in a clay pot) and mastelo (lamb or goat cooked with red wine and dill on vine twigs).',
      el: 'Η Σίφνος είναι η γενέτειρα του Νικόλαου Τσελεμεντέ, του σεφ που εκσυγχρόνισε την ελληνική γαστρονομία στις αρχές του 20ού αιώνα. Στις παραδοσιακές συνταγές ξεχωρίζουν η ρεβιθάδα (που σιγοψήνεται όλη νύχτα στο πήλινο) και το μαστέλο (αρνάκι ή κατσικάκι μαγειρεμένο με κόκκινο κρασί και άνηθο πάνω σε κληματόβεργες).'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Kastro village', 'Local pottery workshops', 'Chrissopigi monastery', 'Slow-cooked clay-pot cuisine', 'Traditional revithada & mastelo', 'Apollonia evening strolls'],
      el: ['Χωριό Κάστρο', 'Τοπικά εργαστήρια κεραμικής', 'Μοναστήρι Χρυσοπηγής', 'Κουζίνα σε πήλινα σκεύη', 'Παραδοσιακή ρεβιθάδα & μαστέλο', 'Βραδινή βόλτα στην Απολλωνία']
    },
    sweet: { en: ['Pastel'], el: ['Παστέλι'] }
  },
  {
    slug: 'serifos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Serifos', el: 'Σέριφος' },
    tagline: { en: 'Quiet island, dramatic Chora', el: 'Ήσυχο νησί με εντυπωσιακή Χώρα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Serifos_-_View_from_Chora.JPG?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: 'Serifos remains one of the quieter Cyclades, with a Chora that climbs dramatically up a rocky hill above the port of Livadi. The island once relied on iron-ore mining, and the old mining structures can still be seen along the coast.',
      el: 'Η Σέριφος παραμένει ένα από τα πιο ήσυχα νησιά των Κυκλάδων, με μια Χώρα που ανεβαίνει εντυπωσιακά πάνω σε έναν βραχώδη λόφο πάνω από το λιμάνι του Λιβαδιού. Το νησί βασιζόταν κάποτε στην εξόρυξη σιδηρομεταλλεύματος, και οι παλιές μεταλλευτικές εγκαταστάσεις είναι ακόμα ορατές κατά μήκος της ακτής.'
    },
    more: {
      en: 'With around 70 beaches and few large resorts, Serifos suits travellers looking for a slower pace, though the port area still has a good choice of small hotels and tavernas by the water.',
      el: 'Με περίπου 70 παραλίες και λίγα μεγάλα ξενοδοχειακά συγκροτήματα, η Σέριφος ταιριάζει σε ταξιδιώτες που αναζητούν πιο αργό ρυθμό, αν και η περιοχή του λιμανιού έχει ακόμα καλή επιλογή από μικρά ξενοδοχεία και ταβέρνες δίπλα στο νερό.'
    },
    more2: {
      en: 'According to Greek mythology, Serifos is where Perseus grew up and later defeated the Gorgon Medusa. In Megalo Livadi, visitors can explore the remnants of the island\'s 20th-century mining history, including abandoned loading bridges, rail tracks, and tunnels carved into the rocky coastal cliffs.',
      el: 'Σύμφωνα με την ελληνική μυθολογία, στη Σέριφο μεγάλωσε ο Περσέας και εξόντωσε τη Μέδουσα. Στο Μεγάλο Λιβάδι, οι επισκέπτες μπορούν να εξερευνήσουν τα απομεινάρια της μεταλλευτικής ιστορίας του 20ού αιώνα, όπως εγκαταλελειμμένες σκάλες φορτώσεως, βαγονέτα και στοές σκαμμένες στους βράχους.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Chora hilltop village', 'Livadi port beaches', 'Old iron-mining sites', 'Panagia Skopiani church', 'Psili Ammos beach', 'Megalo Livadi historical bay'],
      el: ['Χώρα στην κορυφή του λόφου', 'Παραλίες στο λιμάνι Λιβάδι', 'Παλιές θέσεις εξόρυξης σιδήρου', 'Εκκλησία Παναγία Σκοπιανή', 'Παραλία Ψιλή Άμμος', 'Ιστορικός όρμος Μεγάλο Λιβάδι']
    },
    sweet: { en: ['Pastel'], el: ['Παστέλι'] }
  },
  {
    slug: 'folegandros',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Folegandros', el: 'Φολέγανδρος' },
    tagline: { en: 'Clifftop Chora, few crowds', el: 'Χώρα πάνω σε γκρεμό, λίγος κόσμος' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Folegandros-8_banner.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: 'Folegandros is a small, rugged island whose Chora is built directly on the edge of a 200-metre cliff. Its main square, ringed by churches and cafés, is one of the most atmospheric in the Cyclades.',
      el: 'Η Φολέγανδρος είναι ένα μικρό, βραχώδες νησί, με τη Χώρα του χτισμένη απευθείας στην άκρη ενός γκρεμού 200 μέτρων. Η κεντρική πλατεία της, περιτριγυρισμένη από εκκλησίες και καφέ, είναι από τις πιο ατμοσφαιρικές των Κυκλάδων.'
    },
    more: {
      en: 'Folegandros has stayed relatively undeveloped, with just three settlements — Chora, the port at Karavostasis, and Ano Meria — linked by a single road. Katergo, on the south coast, is a popular beach reachable only on foot or by boat.',
      el: 'Η Φολέγανδρος έχει παραμείνει σχετικά αναπτυγμένη ελάχιστα, με μόλις τρεις οικισμούς — τη Χώρα, το λιμάνι στον Καραβοστάση και την Άνω Μεριά — που συνδέονται με έναν μόνο δρόμο. Το Κάτεργο, στη νότια ακτή, είναι δημοφιλής παραλία προσβάσιμη μόνο με τα πόδια ή με βάρκα.'
    },
    more2: {
      en: 'A memorable zigzagging stone path leads up from Chora to the iconic Church of Panagia, resting on a rocky ridge with panoramic views over the sea at sunset. Inside Chora, the Kastro quarter forms a medieval fortress district where the outer walls of houses function as the defensive fortification itself.',
      el: 'Ένα χαρακτηριστικό ελικοειδές πέτρινο μονοπάτι ανεβαίνει από τη Χώρα προς την εμβληματική Εκκλησία της Παναγίας, χτισμένη πάνω σε μια βραχώδη ράχη με πανοραμική θέα στο ηλιοβασίλεμα. Στη Χώρα, το Κάστρο αποτελεί έναν μεσαιωνικό οικισμό όπου οι εξωτερικοί τοίχοι των σπιτιών λειτουργούσαν ως οχυρωματικό τείχος.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Chora\'s clifftop main square', 'Katergo beach', 'Ano Meria folklore museum', 'Church of Panagia above Chora', 'Medieval Kastro quarter', 'Zigzagging sunset walking path'],
      el: ['Κεντρική πλατεία της Χώρας πάνω στον γκρεμό', 'Παραλία Κάτεργο', 'Λαογραφικό μουσείο Άνω Μεριάς', 'Εκκλησία Παναγίας πάνω από τη Χώρα', 'Μεσαιωνική συνοικία Κάστρο', 'Ελικοειδές μονοπάτι για το ηλιοβασίλεμα']
    },
    sweet: { en: ['Karpouzeta'], el: ['Καρπουζένια'] }
  },
  {
    slug: 'rhodes',
    group: 'dodecanese',
    groupName: { en: 'Dodecanese', el: 'Δωδεκάνησα' },
    name: { en: 'Rhodes', el: 'Ρόδος' },
    tagline: { en: 'Medieval old town', el: 'Μεσαιωνική παλιά πόλη' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Street_of_Knights_%28Rhodes%29_03.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Rhodes\' Old Town is a UNESCO World Heritage Site, ringed by medieval walls. The Street of the Knights leads up to the Palace of the Grand Master, while the coastline offers everything from resort beaches to quiet coves.',
      el: 'Η Παλιά Πόλη της Ρόδου είναι μνημείο παγκόσμιας κληρονομιάς της UNESCO, περιτριγυρισμένη από μεσαιωνικά τείχη. Η Οδός των Ιπποτών οδηγεί στο Παλάτι του Μεγάλου Μαγίστρου, ενώ η ακτογραμμή προσφέρει από οργανωμένες παραλίες μέχρι ήσυχους κολπίσκους.'
    },
    more: {
      en: 'South of Rhodes Town, the clifftop village of Lindos combines a whitewashed hillside with an ancient acropolis overlooking the sea, and is one of the most photographed spots on the island. Inland villages like Archangelos keep a quieter, more traditional pace.',
      el: 'Νότια της πόλης της Ρόδου, το χωριό της Λίνδου πάνω σε γκρεμό συνδυάζει μια ασβεστωμένη πλαγιά με μια αρχαία ακρόπολη με θέα στη θάλασσα, και είναι από τα πιο φωτογραφημένα σημεία του νησιού. Χωριά της ενδοχώρας όπως ο Αρχάγγελος διατηρούν πιο ήσυχο, παραδοσιακό ρυθμό.'
    },
    more2: {
      en: 'Rhodes was ruled for over 200 years by the Knights Hospitaller, a medieval Christian military order, whose fortifications and Gothic-style buildings still define the Old Town today. Away from the coast, the island\'s interior holds the wooded Valley of the Butterflies, where thousands of Jersey tiger moths gather each summer, and the hilltop ruins of ancient Kamiros, a quieter counterpart to the more visited sites near Lindos.',
      el: 'Η Ρόδος κυβερνήθηκε για πάνω από 200 χρόνια από τους Ιωαννίτες Ιππότες, μεσαιωνικό χριστιανικό στρατιωτικό τάγμα, του οποίου οι οχυρώσεις και τα γοτθικού ρυθμού κτίρια καθορίζουν ακόμα την Παλιά Πόλη σήμερα. Μακριά από την ακτή, η ενδοχώρα του νησιού κρύβει τη δασωμένη Κοιλάδα των Πεταλούδων, όπου χιλιάδες νυχτοπεταλούδες συγκεντρώνονται κάθε καλοκαίρι, και τα ερείπια της αρχαίας Καμείρου πάνω σε λόφο, μια πιο ήσυχη εναλλακτική στους πιο επισκέψιμους χώρους κοντά στη Λίνδο.'
    },
    best: { en: 'May–October, warm sea through late autumn', el: 'Μάιος–Οκτώβριος, ζεστή θάλασσα μέχρι αργά το φθινόπωρο' },
    highlights: {
      en: ['Street of the Knights', 'Palace of the Grand Master', 'Lindos acropolis & beach', 'Old Town city walls', 'Valley of the Butterflies', 'Ancient Kamiros ruins'],
      el: ['Οδός των Ιπποτών', 'Παλάτι του Μεγάλου Μαγίστρου', 'Ακρόπολη & παραλία Λίνδου', 'Τείχη της Παλιάς Πόλης', 'Κοιλάδα των Πεταλούδων', 'Ερείπια αρχαίας Καμείρου']
    },
    sweet: { en: ['Melekounia'], el: ['Μελεκούνι'] }
  },
  {
    slug: 'kos',
    group: 'dodecanese',
    groupName: { en: 'Dodecanese', el: 'Δωδεκάνησα' },
    name: { en: 'Kos', el: 'Κως' },
    tagline: { en: 'Birthplace of Hippocrates', el: 'Γενέτειρα του Ιπποκράτη' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Inside_Neratzia_Castle_Kos.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY 3.0',
    desc: {
      en: 'Kos is best known as the birthplace of Hippocrates, the father of medicine, and its main town preserves ruins from Greek, Roman and Ottoman periods side by side, including the Neratzia Castle guarding the harbour.',
      el: 'Η Κως είναι πιο γνωστή ως η γενέτειρα του Ιπποκράτη, του πατέρα της ιατρικής, και η κύρια πόλη της διατηρεί ερείπια από την ελληνική, ρωμαϊκή και οθωμανική περίοδο δίπλα-δίπλα, μαζί με το κάστρο της Νερατζιάς που φυλάει το λιμάνι.'
    },
    more: {
      en: 'The island is largely flat and easy to explore by bicycle, with long sandy beaches along its south coast and the ancient Asklepieion — a healing sanctuary linked to Hippocrates — a short trip from the main town.',
      el: 'Το νησί είναι σε μεγάλο βαθμό επίπεδο και εύκολο στην εξερεύνηση με ποδήλατο, με μακριές αμμώδεις παραλίες στη νότια ακτή του και το αρχαίο Ασκληπιείο — ένα θεραπευτικό ιερό συνδεδεμένο με τον Ιπποκράτη — σε μικρή απόσταση από την κύρια πόλη.'
    },
    more2: {
      en: 'In the heart of Kos town stands the Ancient Agora and the Tree of Hippocrates, where the ancient physician was said to have taught his students. Towards the interior, the mountain village of Zia offers sweeping sunsets across the Aegean, while Therma Beach on the southeast coast provides hot thermal springs flowing directly into the sea.',
      el: 'Στην καρδιά της πόλης βρίσκεται η Αρχαία Αγορά και ο Πλάτανος του Ιπποκράτη, όπου λέγεται ότι ο αρχαίος γιατρός δίδασκε τους μαθητές του. Στην ενδοχώρα, το ορεινό χωριό Ζιά προσφέρει εντυπωσιακά ηλιοβασιλέματα, ενώ η παραλία Θέρμα διαθέτει θερμά ιαματικά νερά που αναβλύζουν στη θάλασσα.'
    },
    best: { en: 'May–October', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Neratzia Castle', 'Ancient Asklepieion', 'Tree of Hippocrates', 'South-coast sandy beaches', 'Sunset views in Zia village', 'Therma natural hot springs'],
      el: ['Κάστρο Νερατζιάς', 'Αρχαίο Ασκληπιείο', 'Πλάτανος του Ιπποκράτη', 'Αμμώδεις παραλίες νότιας ακτής', 'Ηλιοβασίλεμα στο χωριό Ζιά', 'Θερμά ιαματικά λουτρά']
    },
    sweet: { en: ['Pitaroudia'], el: ['Πιταρούδια'] }
  },
  {
    slug: 'corfu',
    group: 'ionian',
    groupName: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    name: { en: 'Corfu', el: 'Κέρκυρα' },
    tagline: { en: 'Venetian-style old town', el: 'Παλιά πόλη σε βενετσιάνικο ρυθμό' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Liston_-_Corfu_Old_Town.jpg?width=1400',
    credit: 'Amethyst forest, CC BY-SA 4.0',
    desc: {
      en: 'Corfu\'s old town blends Venetian, French and British influences, best seen along the arcaded Liston promenade. Beyond the town, the island is green and lush, with olive groves running down to quiet beaches.',
      el: 'Η παλιά πόλη της Κέρκυρας συνδυάζει βενετσιάνικες, γαλλικές και βρετανικές επιρροές, με πιο χαρακτηριστικό σημείο τη στοά του Λιστόν. Έξω από την πόλη, το νησί είναι καταπράσινο, με ελαιώνες που φτάνουν μέχρι ήσυχες παραλίες.'
    },
    more: {
      en: 'Corfu\'s Old Fortress and New Fortress, both built by the Venetians, once guarded the town from the sea. Inland, villages in the hills above Paleokastritsa keep a slower pace, and the island\'s cuisine reflects its Italian-influenced history, with dishes like pastitsada rarely found elsewhere in Greece.',
      el: 'Το Παλαιό και το Νέο Φρούριο της Κέρκυρας, και τα δύο χτισμένα από τους Ενετούς, φύλαγαν κάποτε την πόλη από τη θάλασσα. Στην ενδοχώρα, χωριά στους λόφους πάνω από την Παλαιοκαστρίτσα διατηρούν πιο αργό ρυθμό, ενώ η κουζίνα του νησιού αντανακλά την ιταλική επιρροή στην ιστορία του, με πιάτα όπως η παστιτσάδα που σπάνια συναντώνται αλλού στην Ελλάδα.'
    },
    more2: {
      en: 'Corfu is the only part of Greece never conquered by the Ottoman Empire, which helps explain why its architecture and food lean more Venetian and Italian than elsewhere in the country. The Achilleion Palace, built in the 1890s for the Austrian Empress Elisabeth, sits south of Corfu Town and is now open as a museum, while the island\'s cricket ground, a legacy of British rule in the 19th century, is still in use in the main square.',
      el: 'Η Κέρκυρα είναι το μόνο μέρος της Ελλάδας που δεν κατακτήθηκε ποτέ από την Οθωμανική Αυτοκρατορία, κάτι που εξηγεί εν μέρει γιατί η αρχιτεκτονική και η κουζίνα της γέρνουν περισσότερο προς το ενετικό και ιταλικό στιλ απ\' ό,τι αλλού στη χώρα. Το Αχίλλειο, χτισμένο τη δεκαετία του 1890 για την αυστριακή αυτοκράτειρα Ελισάβετ, βρίσκεται νότια της πόλης της Κέρκυρας και λειτουργεί σήμερα ως μουσείο, ενώ το γήπεδο κρίκετ του νησιού, κληρονομιά της βρετανικής κυριαρχίας τον 19ο αιώνα, χρησιμοποιείται ακόμα στην κεντρική πλατεία.'
    },
    best: { en: 'May–June & September for mild weather, July–August for swimming', el: 'Μάιος–Ιούνιος & Σεπτέμβριος για ήπιο καιρό, Ιούλιος–Αύγουστος για μπάνιο' },
    highlights: {
      en: ['Liston promenade', 'Old Fortress', 'Paleokastritsa coastline', 'Local pastitsada cuisine', 'Achilleion Palace', 'Cricket ground in Spianada Square'],
      el: ['Στοά Λιστόν', 'Παλαιό Φρούριο', 'Ακτογραμμή Παλαιοκαστρίτσας', 'Τοπική κουζίνα με παστιτσάδα', 'Αχίλλειο', 'Γήπεδο κρίκετ στη Σπιανάδα']
    },
    sweet: { en: ['Mandoles'], el: ['Μάντολες'] }
  },
  {
    slug: 'zakynthos',
    group: 'ionian',
    groupName: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    name: { en: 'Zakynthos', el: 'Ζάκυνθος' },
    tagline: { en: 'Home of Navagio beach', el: 'Το νησί της παραλίας Ναυάγιο' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Navagio_Beach_and_Shipwreck_of_the_Panagiotis_at_%27Smugglers_Cove%27_Zakynthos.JPG?width=1400',
    credit: 'Badgernet, CC BY-SA 3.0',
    desc: {
      en: 'Zakynthos is best known for Navagio, a shipwreck beach enclosed by tall white cliffs and reachable only by boat. The island\'s coastline also holds blue sea caves and nesting grounds for loggerhead turtles.',
      el: 'Η Ζάκυνθος είναι πιο γνωστή για το Ναυάγιο, μια παραλία με το ναυάγιο πλοίου, κλεισμένη ανάμεσα σε ψηλούς λευκούς βράχους και προσβάσιμη μόνο με βάρκα. Η ακτογραμμή του νησιού κρύβει επίσης γαλάζιες σπηλιές και σημεία φωλιάσματος καρέτα-καρέτα.'
    },
    more: {
      en: 'Much of the south coast, including Laganas Bay, falls within a national marine park set up to protect nesting loggerhead turtles, so boat operators there follow specific rules to limit disturbance. Zakynthos Town, rebuilt after a major 1953 earthquake, still follows its original Venetian street plan.',
      el: 'Μεγάλο μέρος της νότιας ακτής, συμπεριλαμβανομένου του κόλπου του Λαγανά, βρίσκεται εντός θαλάσσιου εθνικού πάρκου που δημιουργήθηκε για την προστασία της φωλιάς της καρέτα-καρέτα, οπότε οι βαρκάρηδες εκεί ακολουθούν συγκεκριμένους κανόνες για να περιορίζουν την όχληση. Η πόλη της Ζακύνθου, που ξαναχτίστηκε μετά τον μεγάλο σεισμό του 1953, ακολουθεί ακόμα το αρχικό ενετικό της σχέδιο δρόμων.'
    },
    more2: {
      en: 'Beyond its coastline, the island features traditional mountain villages like Volimes, famous for handmade lace and local honey. On Bochali hill above Zakynthos Town, Venetian castle ruins offer panoramic views over the harbor, while the island\'s rich musical heritage of "kantades" continues to echo through old tavernas.',
      el: 'Πέρα από τις ακτές, το νησί διαθέτει παραδοσιακά ορεινά χωριά όπως οι Βολίμες, φημισμένα για τα χειροποίητα κεντήματα και το τοπικό μέλι. Στον λόφο της Μπόχαλης πάνω από την πόλη, τα ερείπια του ενετικού κάστρου προσφέρουν πανοραμική θέα στο λιμάνι, ενώ η μουσική παράδοση με τις επτανησιακές καντάδες αναβιώνει στις γραφικές ταβέρνες.'
    },
    best: { en: 'May–September, calmest seas for the boat trip to Navagio in early summer', el: 'Μάιος–Σεπτέμβριος, πιο ήρεμη θάλασσα για τη βαρκάδα στο Ναυάγιο νωρίς το καλοκαίρι' },
    highlights: {
      en: ['Navagio (Shipwreck) beach', 'Blue Caves', 'Loggerhead turtle nesting beaches', "Zakynthos Town's Venetian layout", 'Bochali hilltop view', 'Traditional Volimes village'],
      el: ['Παραλία Ναυάγιο', 'Γαλάζιες Σπηλιές', 'Παραλίες φωλιάσματος καρέτα-καρέτα', 'Ενετικό σχέδιο της πόλης Ζακύνθου', 'Θέα από τον λόφο της Μπόχαλης', 'Παραδοσιακό χωριό Βολίμες']
    },
    sweet: { en: ['Pastel'], el: ['Παστέλι'] }
  },
  {
    slug: 'kefalonia',
    group: 'ionian',
    groupName: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    name: { en: 'Kefalonia', el: 'Κεφαλονιά' },
    tagline: { en: 'The largest Ionian island', el: 'Το μεγαλύτερο νησί του Ιονίου' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Myrtos_Beach%2C_Kefalonia.jpg?width=1400',
    credit: 'Flickr upload bot, CC BY 2.0',
    desc: {
      en: 'Kefalonia is the largest of the Ionian Islands, known for the sweeping white curve of Myrtos Beach, framed by steep limestone cliffs, and for mountain scenery that rises to Mount Ainos.',
      el: 'Η Κεφαλονιά είναι το μεγαλύτερο από τα Ιόνια νησιά, γνωστή για τη μεγάλη λευκή αμμουδιά της παραλίας Μύρτος, πλαισιωμένη από απότομους ασβεστολιθικούς βράχους, και για το ορεινό τοπίο που φτάνει μέχρι τον Αίνο.'
    },
    more: {
      en: 'Beyond its beaches, Kefalonia holds the Melissani cave-lake, where sunlight filters through a collapsed roof onto strikingly blue water, and the fishing village of Fiskardo, one of the few settlements spared by the 1953 earthquake and still lined with pastel-coloured Venetian houses.',
      el: 'Πέρα από τις παραλίες της, η Κεφαλονιά κρύβει τη λίμνη-σπηλιά Μελισσάνη, όπου το φως του ήλιου περνάει μέσα από μια βυθισμένη οροφή πάνω σε έντονα γαλάζιο νερό, καθώς και το ψαροχώρι Φισκάρδο, έναν από τους λίγους οικισμούς που γλίτωσαν από τον σεισμό του 1953 και εξακολουθεί να έχει παστέλ ενετικά σπίτια.'
    },
    more2: {
      en: 'Mount Ainos National Park protects rare endemic black fir trees and wild horses running across the upper slopes. The island is also famous for its local Robola white wine, the dramatic Drogarati Cave with its impressive stalactites, and Assos village, perched beneath a 16th-century Venetian fortress.',
      el: 'Το Εθνικό Πάρκο Αίνου προστατεύει τη σπάνια κεφαλονίτικη μαύρη ελάτη και άγρια άλογα που ζουν στις πλαγιές του. Το νησί είναι επίσης φημισμένο για το ντόπιο λευκό κρασί Ρομπόλα, το εντυπωσιακό σπήλαιο Δρογκαράτης με τους σταλακτίτες, και το χωριό Άσσος με το ενετικό του φρούριο.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Myrtos Beach', 'Melissani cave-lake', 'Fiskardo village', 'Mount Ainos National Park', 'Assos village & fortress', 'Robola wine tasting'],
      el: ['Παραλία Μύρτος', 'Σπηλιά-λίμνη Μελισσάνη', 'Χωριό Φισκάρδο', 'Εθνικό Πάρκο Αίνου', 'Χωριό & κάστρο Άσσου', 'Γευσιγνωσία κρασιού Ρομπόλα']
    },
    sweet: { en: ['Mandoles'], el: ['Μάντολες'] }
  },
  {
    slug: 'lefkada',
    group: 'ionian',
    groupName: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    name: { en: 'Lefkada', el: 'Λευκάδα' },
    tagline: { en: 'Connected to the mainland by causeway', el: 'Συνδεδεμένη με την ήπειρο με πέρασμα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lefkada_banner_Porto_Katsiki.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC0 (public domain)',
    desc: {
      en: 'Lefkada is unusual among the Ionian Islands in being reachable by car over a short floating causeway from the mainland. It is best known for beaches like Porto Katsiki, where pale cliffs drop to turquoise water.',
      el: 'Η Λευκάδα ξεχωρίζει ανάμεσα στα Ιόνια νησιά καθώς είναι προσβάσιμη με αυτοκίνητο μέσω μιας μικρής πλωτής γέφυρας από την ήπειρο. Είναι πιο γνωστή για παραλίες όπως το Πόρτο Κατσίκι, όπου ανοιχτόχρωμοι βράχοι πέφτουν σε τιρκουάζ νερά.'
    },
    more: {
      en: 'The island\'s mountainous interior contrasts with its beach-lined west coast, and villages such as Karya keep alive a tradition of embroidery and lace-making. Lefkada Town, rebuilt with low, earthquake-resistant buildings after repeated tremors, sits on a lagoon facing the mainland.',
      el: 'Το ορεινό εσωτερικό του νησιού έρχεται σε αντίθεση με τη δυτική ακτή του, γεμάτη παραλίες, ενώ χωριά όπως η Καρυά διατηρούν παράδοση κεντήματος και δαντέλας. Η πόλη της Λευκάδας, ξαναχτισμένη με χαμηλά, αντισεισμικά κτίρια μετά από επαναλαμβανόμενους σεισμούς, βρίσκεται σε μια λιμνοθάλασσα απέναντι από την ήπειρο.'
    },
    more2: {
      en: 'Vasiliki Bay on the south coast is widely celebrated as one of Europe\'s top windsurfing and kitesurfing spots thanks to reliable daily thermal winds. From Nydri, boat cruises head out to surrounding islets like Meganisi and Skorpios, the former private retreat of Aristotle Onassis.',
      el: 'Ο κόλπος της Βασιλικής στα νότια είναι αναγνωρισμένος ως ένας από τους κορυφαίους προορισμούς windsurfing στην Ευρώπη λόγω των σταθερών θερμικών ανέμων. Από το Νυδρί, καραβάκια ξεκινούν για τα γύρω νησάκια όπως το Μεγανήσι και ο Σκορπιός, το άλλοτε ιδιωτικό νησί του Αριστοτέλη Ωνάση.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Porto Katsiki beach', 'Egremni beach', 'Karya village embroidery', 'Nydri as a base for boat trips', 'Vasiliki windsurfing bay', 'Excursions to Meganisi & Skorpios'],
      el: ['Παραλία Πόρτο Κατσίκι', 'Παραλία Εγκρεμνοί', 'Κέντημα στο χωριό Καρυά', 'Νυδρί ως βάση για βαρκάδες', 'Κόλπος Βασιλικής για windsurfing', 'Εκδρομές σε Μεγανήσι & Σκορπιό']
    },
    sweet: { en: ['Mandoles'], el: ['Μάντολες'] }
  },
  {
    slug: 'chania',
    group: 'crete',
    groupName: { en: 'Crete', el: 'Κρήτη' },
    name: { en: 'Chania', el: 'Χανιά' },
    tagline: { en: 'Venetian harbour town', el: 'Ενετική πόλη-λιμάνι' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_view_of_the_Old_Venetian_Harbour_in_Chania%2C_Greece.jpg?width=1400',
    credit: 'dronepicr, CC BY 2.0',
    desc: {
      en: 'Chania, on the island of Crete, is built around a beautifully preserved Venetian harbour lined with cafés, a 16th-century lighthouse, and narrow old-town lanes. It is also the gateway to the Samaria Gorge.',
      el: 'Τα Χανιά, στο νησί της Κρήτης, είναι χτισμένα γύρω από ένα εξαιρετικά διατηρημένο ενετικό λιμάνι με καφέ, έναν φάρο του 16ου αιώνα, και στενά δρομάκια στην παλιά πόλη. Είναι επίσης η πύλη προς το φαράγγι της Σαμαριάς.'
    },
    more: {
      en: 'West of the town, the beaches of Balos and Elafonisi are known for shallow, pale-turquoise water and pink-tinged sand, though both require a longer drive or a boat trip. Chania\'s covered market and backstreet tavernas are a good introduction to Cretan cooking, built around olive oil, wild greens and local cheeses.',
      el: 'Δυτικά της πόλης, οι παραλίες Μπάλος και Ελαφονήσι είναι γνωστές για τα ρηχά, ανοιχτά τιρκουάζ νερά και την ελαφρώς ροζ άμμο τους, αν και και οι δύο απαιτούν μεγαλύτερη διαδρομή με αυτοκίνητο ή βάρκα. Η στεγασμένη αγορά των Χανίων και οι ταβέρνες στα πίσω δρομάκια είναι μια καλή εισαγωγή στην κρητική κουζίνα, βασισμένη σε ελαιόλαδο, άγρια χόρτα και τοπικά τυριά.'
    },
    more2: {
      en: 'The Samaria Gorge, one of the longest gorges in Europe, cuts through the White Mountains south of Chania and takes most hikers around five to seven hours to walk end to end, finishing at the coastal village of Agia Roumeli, from where a boat is needed to continue onward. Chania also served as the capital of Crete during the early 20th century, and the mix of Venetian, Ottoman and neoclassical buildings around the harbour reflects that layered history.',
      el: 'Το φαράγγι της Σαμαριάς, ένα από τα μεγαλύτερα φαράγγια στην Ευρώπη, διασχίζει τα Λευκά Όρη νότια των Χανίων και χρειάζεται συνήθως πέντε έως επτά ώρες πεζοπορίας από άκρη σε άκρη, καταλήγοντας στο παράκτιο χωριό Αγία Ρουμέλη, απ\' όπου χρειάζεται βάρκα για να συνεχίσει κανείς. Τα Χανιά υπήρξαν επίσης πρωτεύουσα της Κρήτης στις αρχές του 20ού αιώνα, και ο συνδυασμός ενετικών, οθωμανικών και νεοκλασικών κτιρίων γύρω από το λιμάνι αντανακλά αυτή τη στρωματωμένη ιστορία.'
    },
    best: { en: 'April–June & September–October for hiking, July–August for beaches', el: 'Απρίλιος–Ιούνιος & Σεπτέμβριος–Οκτώβριος για πεζοπορία, Ιούλιος–Αύγουστος για παραλίες' },
    highlights: {
      en: ['Old Venetian Harbour', 'Samaria Gorge', 'Balos & Elafonisi beaches', 'Chania covered market', 'Venetian shipyards (Neoria)', 'Firka Fortress & maritime museum'],
      el: ['Παλιό Ενετικό Λιμάνι', 'Φαράγγι Σαμαριάς', 'Παραλίες Μπάλος & Ελαφονήσι', 'Στεγασμένη αγορά Χανίων', 'Ενετικά Νεώρια', 'Φρούριο Φιρκά & ναυτικό μουσείο']
    },
    sweet: { en: ['Kalitsounia'], el: ['Καλιτσούνια'] }
  },
  {
    slug: 'heraklion',
    group: 'crete',
    groupName: { en: 'Crete', el: 'Κρήτη' },
    name: { en: 'Heraklion', el: 'Ηράκλειο' },
    tagline: { en: 'Gateway to ancient Knossos', el: 'Πύλη προς την αρχαία Κνωσό' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/20090415_Hrakleio_Krhth_Limani_Koules_1.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: "Heraklion is Crete's largest city and its main gateway by air and sea. The Venetian-built Koules Fortress still guards the old harbour, and the city's archaeological museum holds one of the world's finest collections of Minoan art.",
      el: 'Το Ηράκλειο είναι η μεγαλύτερη πόλη της Κρήτης και η κύρια πύλη εισόδου αεροπορικώς και ακτοπλοϊκά. Το ενετικό κάστρο Κούλες φυλάει ακόμα το παλιό λιμάνι, ενώ το αρχαιολογικό μουσείο της πόλης φιλοξενεί μία από τις καλύτερες συλλογές μινωικής τέχνης στον κόσμο.'
    },
    more: {
      en: "Just outside the city, the Palace of Knossos is the best known of Crete's Minoan sites, with reconstructed sections giving a sense of what the Bronze Age complex once looked like. Heraklion also makes a convenient base for day trips to mountain villages and vineyards in the island's interior.",
      el: 'Λίγο έξω από την πόλη, το ανάκτορο της Κνωσού είναι ο πιο γνωστός μινωικός χώρος της Κρήτης, με αναστηλωμένα τμήματα που δίνουν μια εικόνα του πώς έμοιαζε κάποτε το συγκρότημα της Εποχής του Χαλκού. Το Ηράκλειο αποτελεί επίσης βολική βάση για ημερήσιες εκδρομές σε ορεινά χωριά και αμπελώνες της ενδοχώρας του νησιού.'
    },
    more2: {
      en: 'The city center is defined by historic fountains like the 17th-century Morosini Lions Fountain in Lion Square, surrounded by lively pedestrian streets and traditional mezedopoleia. Beyond Knossos, the region features other important Minoan palaces like Phaistos and Archanes, as well as the Peza wine region, famous for producing authentic Cretan varieties.',
      el: 'Το κέντρο της πόλης διαμορφώνεται γύρω από ιστορικά μνημεία όπως το σιντριβάνι των Λεόντων (Κρήνη Μοροζίνι) του 17ου αιώνα, περιτριγυρισμένο από ζωντανούς πεζόδρομους και μεζεδοπωλεία. Πέρα από την Κνωσό, η περιοχή φιλοξενεί κι άλλα σημαντικά μινωικά ανάκτορα όπως τη Φαιστό, καθώς και την αμπελουργική ζώνη των Αρχανών και του Πεζού.'
    },
    best: { en: 'April–October', el: 'Απρίλιος–Οκτώβριος' },
    highlights: {
      en: ['Palace of Knossos', 'Koules Fortress', 'Archaeological Museum of Heraklion', 'Venetian city walls', 'Morosini Lions Fountain', 'Phaistos Minoan palace'],
      el: ['Ανάκτορο της Κνωσού', 'Κάστρο Κούλες', 'Αρχαιολογικό Μουσείο Ηρακλείου', 'Ενετικά τείχη της πόλης', 'Σιντριβάνι των Λεόντων', 'Μινωικό ανάκτορο Φαιστού']
    },
    sweet: { en: ['Kalitsounia'], el: ['Καλιτσούνια'] }
  },
  {
    slug: 'skiathos',
    group: 'sporades',
    groupName: { en: 'Sporades', el: 'Σποράδες' },
    name: { en: 'Skiathos', el: 'Σκιάθος' },
    tagline: { en: 'Pine forests and sandy beaches', el: 'Πευκόφυτα δάση και αμμώδεις παραλίες' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_view_of_Skiathos_Harbor%2C_Greece_%2851696603530%29.jpg?width=1400',
    credit: 'dronepicr, CC BY 2.0',
    desc: {
      en: 'Skiathos, the westernmost of the Sporades islands, is covered in pine forest that runs down almost to the waterline in places. Its main town wraps around a busy harbour lined with cafés, boats and a small islet-chapel connected by a causeway.',
      el: 'Η Σκιάθος, το δυτικότερο νησί των Σποράδων, είναι καλυμμένη με πευκοδάση που σε ορισμένα σημεία φτάνουν σχεδόν μέχρι την ακτή. Η κύρια πόλη της απλώνεται γύρω από ένα πολυσύχναστο λιμάνι με καφέ, βάρκες και ένα μικρό νησάκι-εκκλησία που συνδέεται με στενή γέφυρα.'
    },
    more: {
      en: 'Skiathos is known across Greece for the golden sands of Koukounaries and Lalaria beaches, the latter reachable only by boat and framed by white cliffs. Ferries connect the island easily to Skopelos and Alonissos for those exploring the wider Sporades.',
      el: 'Η Σκιάθος είναι γνωστή σε όλη την Ελλάδα για τη χρυσή άμμο των παραλιών Κουκουναριές και Λαλάρια, με την τελευταία να είναι προσβάσιμη μόνο με βάρκα και πλαισιωμένη από λευκούς βράχους. Τα πλοία συνδέουν εύκολα το νησί με τη Σκόπελο και την Αλόννησο για όσους θέλουν να εξερευνήσουν τις υπόλοιπες Σποράδες.'
    },
    more2: {
      en: 'Skiathos Town was the birthplace of Alexandros Papadiamantis, one of Greece\'s most celebrated 19th-century authors, and his former home now operates as a museum in the old quarter. At the northern tip of the island lie the ruins of Kastro, a medieval fortified town perched high above the sea where residents took refuge from pirate raids.',
      el: 'Η πόλη της Σκιάθου ήταν η γενέτειρα του Αλέξανδρου Παπαδιαμάντη, ενός από τους σημαντικότερους Έλληνες λογοτέχνες, και το σπίτι του λειτουργεί σήμερα ως μουσείο. Στο βόρειο άκρο του νησιού βρίσκονται τα ερείπια του Κάστρου, μιας μεσαιωνικής οχυρωμένης πολιτείας πάνω στον βράχο όπου κατέφευγαν οι κάτοικοι από τις επιδρομές των πειρατών.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Koukounaries beach', 'Lalaria beach by boat', 'Bourtzi islet', 'Old Kastro fortress ruins', 'Papadiamantis House Museum', 'Mandraki & Banana beaches'],
      el: ['Παραλία Κουκουναριές', 'Παραλία Λαλάρια με βάρκα', 'Νησάκι Μπούρτζι', 'Ερείπια παλιού Κάστρου', 'Μουσείο Παπαδιαμάντη', 'Παραλίες Μανδράκι & Μπανcopied']
    },
    sweet: { en: ['Amygdalota'], el: ['Αμυγδαλωτά'] }
  },
  {
    slug: 'hydra',
    group: 'saronic',
    groupName: { en: 'Saronic Islands', el: 'Σαρωνικά Νησιά' },
    name: { en: 'Hydra', el: 'Ύδρα' },
    tagline: { en: 'Car-free island near Athens', el: 'Νησί χωρίς αυτοκίνητα κοντά στην Αθήνα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_of_Hydra_island%2C_Greece_%2843958918185%29.jpg?width=1400',
    credit: 'dronepicr, CC BY 2.0',
    desc: {
      en: 'Hydra bans all wheeled vehicles, including bicycles, so the only transport around its stone streets is on foot or by donkey and mule. Its crescent-shaped harbour is lined with 18th and 19th-century stone mansions built by wealthy shipowning families.',
      el: 'Η Ύδρα απαγορεύει κάθε τροχοφόρο, ακόμα και τα ποδήλατα, οπότε η μόνη μετακίνηση στα πέτρινα δρομάκια της γίνεται με τα πόδια ή με γαϊδούρι και μουλάρι. Το ημισεληνοειδές λιμάνι της είναι περιτριγυρισμένο από πέτρινα αρχοντικά του 18ου και 19ου αιώνα, χτισμένα από πλούσιες οικογένειες εφοπλιστών.'
    },
    more: {
      en: 'Only about an hour and a half from Piraeus by high-speed ferry, Hydra has long attracted artists and writers, including Leonard Cohen, who lived there in the 1960s. Small water taxis run from the harbour to swimming spots like Vlychos and Bisti along the coast.',
      el: 'Μόλις περίπου μιάμιση ώρα από τον Πειραιά με ταχύπλοο, η Ύδρα προσελκύει εδώ και καιρό καλλιτέχνες και συγγραφείς, ανάμεσά τους και τον Leonard Cohen, που έζησε εκεί τη δεκαετία του 1960. Μικρά υδροταξί ξεκινούν από το λιμάνι για σημεία κολύμβησης όπως ο Βλυχός και το Μπίστι κατά μήκος της ακτής.'
    },
    more2: {
      en: 'The island played a crucial role in the 1821 Greek War of Independence, contributing its formidable merchant fleet and producing famous naval leaders like Laskarina Bouboulina and Andreas Miaoulis. Today, restored grand mansions like the Lazaros Koundouriotis Manor showcase historic art and furnishings, while the island continues to foster a thriving arts community.',
      el: 'Το νησί έπαιξε καθοριστικό ρόλο στην Επανάσταση του 1821, διαθέτοντας τον ισχυρό εμπορικό του στόλο και βγάζοντας σπουδαίους ναυμάχους όπως η Λασκαρίνα Μπουμπουλίνα και ο Ανδρέας Μιαούλης. Σήμερα, αναστηλωμένα αρχοντικά όπως η Οικία Λαζάρου Κουντουριώτη λειτουργούν ως μουσεία, ενώ το νησί διατηρεί έντονη καλλιτεχνική ζωή.'
    },
    best: { en: 'April–October', el: 'Απρίλιος–Οκτώβριος' },
    highlights: {
      en: ['Car-free stone-mansion harbour', 'Vlychos & Bisti beaches by water taxi', 'Historical Archives Museum', 'Hilltop monasteries', 'Lazaros Koundouriotis Manor', 'Bastions with historic cannons'],
      el: ['Λιμάνι χωρίς αυτοκίνητα με αρχοντικά', 'Παραλίες Βλυχός & Μπίστι με υδροταξί', 'Ιστορικό Αρχείο - Μουσείο', 'Μοναστήρια στους λόφους', 'Αρχοντικό Λαζάρου Κουντουριώτη', 'Προμαχώνες με τα ιστορικά κανόνια']
    },
    sweet: { en: ['Amygdalota'], el: ['Αμυγδαλωτά'] }
  },
  {
    slug: 'samos',
    group: 'north-aegean',
    groupName: { en: 'North Aegean', el: 'Βόρειο Αιγαίο' },
    name: { en: 'Samos', el: 'Σάμος' },
    tagline: { en: 'Birthplace of Pythagoras', el: 'Γενέτειρα του Πυθαγόρα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pythagorion.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: 'Samos sits just off the coast of Turkey and is best known as the birthplace of the mathematician Pythagoras. The harbour town of Pythagoreio, a UNESCO World Heritage Site, preserves an ancient tunnel-aqueduct and the ruins of a temple to Hera.',
      el: 'Η Σάμος βρίσκεται σχεδόν ακριβώς απέναντι από τις ακτές της Τουρκίας και είναι πιο γνωστή ως η γενέτειρα του μαθηματικού Πυθαγόρα. Η πόλη-λιμάνι Πυθαγόρειο, μνημείο παγκόσμιας κληρονομιάς της UNESCO, διατηρεί ένα αρχαίο σηραγγοϋδραγωγείο και τα ερείπια ναού της Ήρας.'
    },
    more: {
      en: 'The island is mountainous and green, with vineyards producing sweet Muscat wine on terraced slopes above the sea. Samos is also a starting point for ferries to nearby Turkish coastal towns, making it useful for travellers combining Greece with a wider Aegean trip.',
      el: 'Το νησί είναι ορεινό και καταπράσινο, με αμπελώνες που παράγουν γλυκό μοσχάτο κρασί σε αναβαθμίδες πάνω από τη θάλασσα. Η Σάμος είναι επίσης σημείο εκκίνησης για πλοία προς κοντινές τουρκικές παράκτιες πόλεις, χρήσιμο για ταξιδιώτες που συνδυάζουν την Ελλάδα με ένα ευρύτερο ταξίδι στο Αιγαίο.'
    },
    more2: {
      en: 'Among its natural wonders, Mount Kerkis rises steeply as one of the Aegean\'s highest peaks, attracting hikers to its caves and secluded monasteries. Coastal highlights include Kokkari, a picturesque fishing harbor popular with windsurfers, and Potami Beach with its nearby waterfalls tucked into lush forest gorges.',
      el: 'Στα φυσικά της θαύματα περιλαμβάνεται το όρος Κέρκης, από τις ψηλότερες κορυφές του Αιγαίου, που προσελκύει πεζοπόρους σε σπήλαια και ορεινά μοναστήρια. Στα παραθαλάσσια αξιοθέατα ξεχωρίζει το Κοκκάρι, ένα γραφικό ψαροχώρι, και η παραλία Ποτάμι με τους καταρράκτες της μέσα σε καταπράσινο φαράγγι.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Pythagoreio harbour', 'Ancient Eupalinos tunnel-aqueduct', 'Heraion temple ruins', 'Muscat vineyards', 'Potami waterfalls & gorge', 'Kokkari fishing village'],
      el: ['Λιμάνι Πυθαγορείου', 'Αρχαία σήραγγα-υδραγωγείο Ευπαλίνου', 'Ερείπια ναού Ηραίου', 'Αμπελώνες μοσχάτου', 'Καταρράκτες στο Ποτάμι', 'Ψαροχώρι Κοκκάρι']
    },
    sweet: { en: ['Samian glyko'], el: ['Σαμιώτικο γλυκό'] }
  },
  {
    slug: 'chios',
    group: 'north-aegean',
    groupName: { en: 'North Aegean', el: 'Βόρειο Αιγαίο' },
    name: { en: 'Chios', el: 'Χίος' },
    tagline: { en: 'Home of the mastic villages', el: 'Το νησί των μαστιχοχωριών' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/The_port_of_Mesta%2C_Chios%2C_Greece.JPG?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: 'Chios is the only place in the world where mastic, an aromatic resin, is commercially grown, and its southern Mastic Villages, including the fortified settlement of Mesta, grew wealthy from the trade. Mesta\'s maze-like stone streets were built narrow deliberately to slow down pirate raids.',
      el: 'Η Χίος είναι το μοναδικό μέρος στον κόσμο όπου καλλιεργείται εμπορικά η μαστίχα, μια αρωματική ρητίνη, και τα νότια μαστιχοχώρια της, όπως ο οχυρωμένος οικισμός Μεστά, πλούτισαν από αυτό το εμπόριο. Τα δρομάκια-λαβύρινθος των Μεστών χτίστηκαν σκόπιμα στενά για να καθυστερούν τις πειρατικές επιδρομές.'
    },
    more: {
      en: 'Chios Town centres on a Genoese-era castle, and the island as a whole mixes mastic-growing villages in the south with pine forests and mountain monasteries further north, including the Byzantine monastery of Nea Moni, another UNESCO World Heritage Site.',
      el: 'Η πόλη της Χίου συγκεντρώνεται γύρω από ένα κάστρο της γενοβέζικης περιόδου, ενώ το νησί συνολικά συνδυάζει χωριά καλλιέργειας μαστίχας στον νότο με πευκοδάση και ορεινά μοναστήρια πιο βόρεια, συμπεριλαμβανομένης της βυζαντινής μονής Νέα Μονή, άλλου μνημείου παγκόσμιας κληρονομιάς της UNESCO.'
    },
    more2: {
      en: 'In Pyrgi, another unique Mastic Village, building facades are decorated with intricate geometric black-and-white patterns called "xysta". The Kampos region just south of Chios Town features grand citrus-grove estates with high stone walls and Genoese mansions, while Mavra Volia beach is famed for its jet-black volcanic pebbles.',
      el: 'Στο Πυργί, άλλο ένα ιδιαίτερο Μαστιχοχώρι, οι πρόσοψεις των σπιτιών είναι διακοσμημένες με περίτεχνα γεωμετρικά ασπρόμαυρα σχέδια, τα "ξυστά". Η περιοχή του Κάμπου διαθέτει αρχοντικά κτήματα με εσπεριδοειδή και ψηλούς πέτρινους τοίχους, ενώ η παραλία Μαύρα Βόλια φημίζεται για τα μαύρα ηφαιστειακά της βότσαλα.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Mesta fortified village', 'Mastic-growing villages', 'Nea Moni monastery', 'Chios Town castle', 'Pyrgi village with "xysta" designs', 'Mavra Volia black-pebble beach'],
      el: ['Οχυρωμένο χωριό Μεστά', 'Μαστιχοχώρια', 'Μονή Νέας Μονής', 'Κάστρο της πόλης της Χίου', 'Χωριό Πυργί με τα "ξυστά"', 'Παραλία Μαύρα Βόλια']
    },
    sweet: { en: ['Ypovrichio'], el: ['Υποβρύχιο'] }
  },
  {
    slug: 'thassos',
    group: 'north-aegean',
    groupName: { en: 'North Aegean', el: 'Βόρειο Αιγαίο' },
    name: { en: 'Thassos', el: 'Θάσος' },
    tagline: { en: 'Pine-covered island near the mainland', el: 'Πευκόφυτο νησί κοντά στην ήπειρο' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kastro%2C_Thassos.JPG?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Thassos lies close to the northern mainland, reachable by a short ferry from Kavala, and is covered in pine and chestnut forest running down to white-pebble beaches. Marble quarried on the island since antiquity was once exported across the ancient Mediterranean.',
      el: 'Η Θάσος βρίσκεται κοντά στη βόρεια ηπειρωτική Ελλάδα, προσβάσιμη με σύντομο πλοίο από την Καβάλα, και είναι καλυμμένη με πευκοδάση και καστανιές που φτάνουν μέχρι παραλίες με λευκά βότσαλα. Το μάρμαρο που εξορυσσόταν στο νησί από την αρχαιότητα εξαγόταν κάποτε σε όλη τη Μεσόγειο.'
    },
    more: {
      en: 'Limenas, the main town, sits over the ancient city of Thasos, with an agora, theatre and acropolis still visible among the modern streets. The island\'s ring road makes it easy to circle by car or moped, stopping at fishing villages like Panagia and beaches such as Golden Beach along the way.',
      el: 'Ο Λιμένας, η κύρια πόλη, βρίσκεται πάνω στην αρχαία πόλη της Θάσου, με αγορά, θέατρο και ακρόπολη ακόμα ορατά ανάμεσα στους σύγχρονους δρόμους. Ο περιφερειακός δρόμος του νησιού κάνει εύκολη τη διαδρομή με αυτοκίνητο ή μηχανάκι, με στάσεις σε ψαροχώρια όπως η Παναγία και παραλίες όπως η Χρυσή Αμμουδιά.'
    },
    more2: {
      en: 'On the southern edge of the island, Giola is a natural sea lagoon carved into the rocks, looking like a giant natural swimming pool filled with turquoise ocean water. Nearby sits the Holy Monastery of Archangel Michael, perched dramatically on a cliff edge overlooking the Aegean Sea.',
      el: 'Στο νότιο άκρο του νησιού, η Γκιόλα είναι μια φυσική θαλάσσια πισίνα σκαμμένη στους βράχους με τιρκουάζ νερά. Κοντά εκεί βρίσκεται το Ιερό Μοναστήρι του Αρχαγγέλου Μιχαήλ, χτισμένο στην άκρη ενός απότομου βράχου με θέα το Αιγαίο.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Ancient Thasos ruins in Limenas', 'Golden Beach', 'Panagia village', 'Ring-road drive around the island', 'Giola natural rock pool', 'Monastery of Archangel Michael'],
      el: ['Αρχαία Θάσος στον Λιμένα', 'Χρυσή Αμμουδιά', 'Χωριό Παναγία', 'Διαδρομή στον περιφερειακό δρόμο του νησιού', 'Φυσική πισίνα Γκιόλα', 'Μονή Αρχαγγέλου Μιχαήλ']
    },
    sweet: { en: ['Glyko karydaki'], el: ['Γλυκό καρυδάκι'] }
  },
  {
    slug: 'patmos',
    group: 'dodecanese',
    groupName: { en: 'Dodecanese', el: 'Δωδεκάνησα' },
    name: { en: 'Patmos', el: 'Πάτμος' },
    tagline: { en: 'The island of the Apocalypse', el: 'Το νησί της Αποκάλυψης' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ph.Patmos_Monastery-01.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Patmos is a place of Christian pilgrimage, believed to be where Saint John wrote the Book of Revelation in a cave that can still be visited. The fortress-like Monastery of Saint John the Theologian crowns the hill above Chora, and both sites form a UNESCO World Heritage Site.',
      el: 'Η Πάτμος είναι τόπος χριστιανικού προσκυνήματος, καθώς πιστεύεται ότι εκεί ο Άγιος Ιωάννης έγραψε την Αποκάλυψη σε ένα σπήλαιο που επισκέπτεται ακόμα κόσμος. Η οχυρωμένη Μονή του Αγίου Ιωάννου του Θεολόγου στέφει τον λόφο πάνω από τη Χώρα, και οι δύο χώροι αποτελούν μαζί μνημείο παγκόσμιας κληρονομιάς της UNESCO.'
    },
    more: {
      en: 'Beyond its religious sites, Patmos has a quieter, more low-key holiday atmosphere than many Dodecanese islands, with small coves for swimming and a Chora of whitewashed captains\' houses built to be hard to see from the sea, a defence against pirate raids.',
      el: 'Πέρα από τους θρησκευτικούς χώρους της, η Πάτμος έχει πιο ήσυχη, χαμηλών τόνων ατμόσφαιρα διακοπών σε σχέση με πολλά νησιά των Δωδεκανήσων, με μικρούς κολπίσκους για μπάνιο και μια Χώρα από ασβεστωμένα καπετανόσπιτα χτισμένα ώστε να είναι δύσκολο να φαίνονται από τη θάλασσα, ως άμυνα απέναντι σε πειρατικές επιδρομές.'
    },
    more2: {
      en: 'Skala, the island\'s port town, serves as the vibrant center for dining and boat trips to surrounding uninhabited islets like Marathi and Arkoi. High on Chora\'s hill, three iconic restored 16th-century windmills overlook the Aegean, completing the island\'s distinctive skyline.',
      el: 'Η Σκάλα, το λιμάνι του νησιού, αποτελεί το κέντρο για φαγητό και εξορμήσεις με καραβάκια σε γύρω ακατοίκητα νησάκια όπως το Μαράθι και οι Αρκιοί. Ψηλά στη Χώρα, τρεις αναστηλωμένοι ανεμόμυλοι του 16ου αιώνα συμπληρώνουν τη χαρακτηριστική σιλουέτα του νησιού.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Monastery of Saint John the Theologian', 'Cave of the Apocalypse', 'Chora\'s captains\' houses', 'Quiet swimming coves', 'Windmills of Chora', 'Boat trips to Marathi & Arkoi'],
      el: ['Μονή Αγίου Ιωάννου του Θεολόγου', 'Σπήλαιο της Αποκάλυψης', 'Καπετανόσπιτα της Χώρας', 'Ήσυχοι κολπίσκοι για μπάνιο', 'Ανεμόμυλοι της Χώρας', 'Εκδρομές με βάρκα στο Μαράθι']
    },
    sweet: { en: ['Poungia'], el: ['Πουγκιά'] }
  },
  {
    slug: 'karpathos',
    group: 'dodecanese',
    groupName: { en: 'Dodecanese', el: 'Δωδεκάνησα' },
    name: { en: 'Karpathos', el: 'Κάρπαθος' },
    tagline: { en: 'Mountain villages and old traditions', el: 'Ορεινά χωριά και παλιές παραδόσεις' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/View_of_the_Finiki_village._Karpathos%2C_Greece.jpg?width=1400',
    credit: 'Ввласенко / Volodymyr Vlasenko, CC BY-SA 3.0',
    desc: {
      en: 'Karpathos, between Rhodes and Crete, is known for its rugged mountains and the isolated northern village of Olympos, where some older residents still wear traditional dress and speak a dialect with ancient roots.',
      el: 'Η Κάρπαθος, ανάμεσα στη Ρόδο και την Κρήτη, είναι γνωστή για τα απόκρημνα βουνά της και το απομονωμένο βόρειο χωριό Όλυμπος, όπου κάποιοι μεγαλύτεροι κάτοικοι ακόμα φορούν παραδοσιακές φορεσιές και μιλούν μια διάλεκτο με αρχαίες ρίζες.'
    },
    more: {
      en: 'For much of its history Olympos was reachable only on foot or by boat, which helped preserve its customs, while the south of the island has wide sandy beaches and stronger winds that attract windsurfers to spots like Afiartis.',
      el: 'Για μεγάλο μέρος της ιστορίας του, ο Όλυμπος ήταν προσβάσιμος μόνο με τα πόδια ή με βάρκα, κάτι που βοήθησε να διατηρηθούν τα έθιμά του, ενώ ο νότος του νησιού έχει φαρδιές αμμώδεις παραλίες και πιο δυνατούς ανέμους που προσελκύουν windsurfers σε σημεία όπως ο Αφιάρτης.'
    },
    more2: {
      en: 'The island\'s dramatic coastline is home to spectacular beaches such as Apella, tucked beneath pine-covered mountain cliffs, and Kyra Panagia with its iconic red-domed church. Hiking paths cut across rugged ridges, connecting remote bays to historic mountain settlements.',
      el: 'Η εντυπωσιακή ακτογραμμή του νησιού φιλοξενεί εκπληκτικές παραλίες όπως η Άπελλα, φωλιασμένη κάτω από πευκόφυτους βράχους, και η Κυρά Παναγιά με την εκκλησία με τον κόκκινο τρούλο. Μονοπάτια διασχίζουν τις ορεινές ράχες συνδέοντας απομονωμένους όρμους.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Olympos mountain village', 'Traditional dress & dialect', 'Windsurfing at Afiartis', 'Finiki fishing village', 'Apella & Kyra Panagia beaches', 'Hiking ancient mountain paths'],
      el: ['Ορεινό χωριό Όλυμπος', 'Παραδοσιακή φορεσιά & διάλεκτος', 'Windsurfing στον Αφιάρτη', 'Ψαροχώρι Φοίνικας', 'Παραλίες Άπελλα & Κυρά Παναγιά', 'Πεζοπορία σε ορεινά μονοπάτια']
    },
    sweet: { en: ['Baklava'], el: ['Μπακλαβάς'] }
  },
  {
    slug: 'skopelos',
    group: 'sporades',
    groupName: { en: 'Sporades', el: 'Σποράδες' },
    name: { en: 'Skopelos', el: 'Σκόπελος' },
    tagline: { en: 'The Mamma Mia! island', el: 'Το νησί του Mamma Mia!' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Skopelos_banner.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 3.0',
    desc: {
      en: 'Skopelos is often described as the greenest of the Sporades, with dense pine forest covering much of the island. Its main town climbs a hillside above the harbour in tiers of whitewashed, tile-roofed houses, unusual for the Aegean.',
      el: 'Η Σκόπελος περιγράφεται συχνά ως το πιο πράσινο νησί των Σποράδων, με πυκνό πευκοδάσος να καλύπτει μεγάλο μέρος του νησιού. Η κύρια πόλη της ανεβαίνει σε μια πλαγιά πάνω από το λιμάνι σε σειρές από ασβεστωμένα σπίτια με κεραμοσκεπές, ασυνήθιστο για το Αιγαίο.'
    },
    more: {
      en: 'Parts of the 2008 film Mamma Mia! were shot on Skopelos, including a small chapel on a sea-cliff that has since become a popular stop for visitors. The island is also known for its plum orchards and a distinctive prune-based sweet.',
      el: 'Μέρη της ταινίας Mamma Mia! του 2008 γυρίστηκαν στη Σκόπελο, συμπεριλαμβανομένου ενός μικρού εκκλησάκι πάνω σε θαλασσινό βράχο που έκτοτε έχει γίνει δημοφιλής στάση για επισκέπτες. Το νησί είναι επίσης γνωστό για τους δαμασκηνεώνες του και ένα χαρακτηριστικό γλυκό με βάση το δαμάσκηνο.'
    },
    more2: {
      en: 'The dramatic Agios Ioannis Kastri chapel sits atop a 100-meter rock formation reaching out into the sea, accessible via a winding cliffside staircase. Picturesque beaches like Kastani and Hovolo feature crystal-clear waters framed by lush green pine trees dipping right into the Aegean.',
      el: 'Το εκκλησάκι του Αγίου Ιωάννη στο Καστρί βρίσκεται στην κορυφή ενός βράχου 100 μέτρων στη θάλασσα, προσβάσιμο από πέτρινα σκαλοπάτια. Γραφικές παραλίες όπως το Καστάνη και το Χόβολο διαθέτουν διάφανα νερά με πεύκα που φτάνουν μέχρι το κύμα.'
    },
    best: { en: 'June–September', el: 'Ιούνιος–Σεπτέμβριος' },
    highlights: {
      en: ['Skopelos Town harbour', 'Mamma Mia! chapel viewpoint', 'Panormos & Milia beaches', 'Plum orchards & local sweets', 'Kastani & Hovolo beaches', 'Agios Ioannis Kastri cliff chapel'],
      el: ['Λιμάνι Σκοπέλου', 'Εκκλησάκι από το Mamma Mia!', 'Παραλίες Πάνορμος & Μηλιά', 'Δαμασκηνεώνες & τοπικά γλυκά', 'Παραλίες Καστάνη & Χόβολο', 'Άγιος Ιωάννης στο Καστρί']
    },
    sweet: { en: ['Avgato'], el: ['Αυγάτο'] }
  },
  {
    slug: 'aegina',
    group: 'saronic',
    groupName: { en: 'Saronic Islands', el: 'Σαρωνικά Νησιά' },
    name: { en: 'Aegina', el: 'Αίγινα' },
    tagline: { en: 'Pistachios and an easy day trip', el: 'Φιστίκια και εύκολη ημερήσια εκδρομή' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Temple_of_Aphaia_in_February_2005_14.jpg?width=1400',
    credit: 'Runner1928, CC BY-SA 4.0',
    desc: {
      en: 'Aegina, roughly an hour from Piraeus by ferry, is the closest of the Saronic Islands to Athens and a popular day trip. The well-preserved Temple of Aphaia stands on a pine-covered hill overlooking the sea, one of the few ancient Greek temples still largely intact.',
      el: 'Η Αίγινα, περίπου μία ώρα από τον Πειραιά με πλοίο, είναι το κοντινότερο στην Αθήνα από τα Σαρωνικά νησιά και δημοφιλής προορισμός για ημερήσια εκδρομή. Ο καλοδιατηρημένος ναός της Αφαίας στέκεται σε έναν πευκόφυτο λόφο με θέα στη θάλασσα, ένας από τους λίγους αρχαίους ελληνικούς ναούς που παραμένουν σε μεγάλο βαθμό ακέραιοι.'
    },
    more: {
      en: 'The island is Greece\'s main producer of pistachios, sold from roadside stalls and worked into everything from ice cream to spreads. Aegina Town\'s harbour, lined with fishing boats and neoclassical buildings, briefly served as the first capital of independent Greece in the 1820s.',
      el: 'Το νησί είναι ο κύριος παραγωγός φιστικιού στην Ελλάδα, που πωλείται από πάγκους στον δρόμο και χρησιμοποιείται σε όλα, από παγωτό μέχρι επάλειψη. Το λιμάνι της πόλης της Αίγινας, με ψαρόβαρκες και νεοκλασικά κτίρια, υπήρξε για λίγο η πρώτη πρωτεύουσα της ανεξάρτητης Ελλάδας τη δεκαετία του 1820.'
    },
    more2: {
      en: 'The island hosts the Monastery of Agios Nektarios, one of the largest orthodox monasteries in the Balkans and an important pilgrimage site. Nearby, the deserted medieval hill town of Paleochora features dozens of small Byzantine chapels scattered across stone slopes.',
      el: 'Στο νησί βρίσκεται η Μονή του Αγίου Νεκταρίου, ένα από τα μεγαλύτερα ορθόδοξα μοναστήρια των Βαλκανίων. Κοντά εκεί, η εγκαταλελειμμένη μεσαιωνική καστροπολιτεία της Παλαιοχώρας διαθέτει δεκάδες βυζαντινά εκκλησάκια διάσπαρτα στις πλαγιές.'
    },
    best: { en: 'April–October, easy year-round as a short trip from Athens', el: 'Απρίλιος–Οκτώβριος, εύκολη πρόσβαση όλο τον χρόνο ως σύντομη εκδρομή από την Αθήνα' },
    highlights: {
      en: ['Temple of Aphaia', 'Local pistachios', 'Aegina Town harbour', 'Moni islet nature reserve', 'Monastery of Agios Nektarios', 'Medieval Paleochora ruins'],
      el: ['Ναός της Αφαίας', 'Τοπικό φιστίκι', 'Λιμάνι της πόλης Αίγινας', 'Φυσικό καταφύγιο νησίδας Μονή', 'Μονή Αγίου Νεκταρίου', 'Μεσαιωνική Παλαιοχώρα']
    },
    sweet: { en: ['Pistachio sweets'], el: ['Φιστικωτά'] }
  },
  {
    slug: 'syros',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Syros', el: 'Σύρος' },
    tagline: { en: 'Neoclassical capital of the Cyclades', el: 'Νεοκλασική πρωτεύουσα των Κυκλάδων' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Panorama_of_the_central_square_of_Ermoupolis_%28Miaouli_square%29%2C_Syros_-_Greece_-_panoramio.jpg?width=1400',
    credit: 'Panoramio upload bot, CC BY-SA 3.0',
    desc: {
      en: 'Syros stands apart from the typical whitewashed-Cycladic look, with its capital Ermoupoli built up in tiers of neoclassical mansions during the 19th century, when it was one of Greece\'s busiest shipping and trading ports.',
      el: 'Η Σύρος ξεχωρίζει από τη συνηθισμένη ασβεστωμένη κυκλαδίτικη εικόνα, με την πρωτεύουσά της, την Ερμούπολη, χτισμένη σε σειρές από νεοκλασικά αρχοντικά τον 19ο αιώνα, όταν ήταν ένα από τα πιο πολυσύχναστα λιμάνια εμπορίου και ναυτιλίας της Ελλάδας.'
    },
    more: {
      en: 'The island remains the administrative capital of the Cyclades and has a year-round population and working shipyards, giving it a different rhythm from more tourist-dependent islands nearby. Miaouli Square, ringed by cafés and the marble-fronted town hall, is the centre of daily life in Ermoupoli.',
      el: 'Το νησί παραμένει η διοικητική πρωτεύουσα των Κυκλάδων και έχει μόνιμο πληθυσμό και ναυπηγεία σε λειτουργία όλο τον χρόνο, κάτι που του δίνει διαφορετικό ρυθμό από πιο τουριστικά νησιά της περιοχής. Η πλατεία Μιαούλη, περιτριγυρισμένη από καφέ και το μαρμάρινο δημαρχείο, είναι το κέντρο της καθημερινής ζωής στην Ερμούπολη.'
    },
    more2: {
      en: 'Above Ermoupoli sits Ano Syros, a medieval hilltop town founded in the 13th century with strong Catholic roots, narrow steps, and sweeping sea views. Syros is also famous for its traditional loukoumia (Turkish delight sweets) and halvadopita, as well as being the heartland of rebetiko music, championed by local legend Markos Vamvakaris.',
      el: 'Πάνω από την Ερμούπολη δεσπόζει η Άνω Σύρος, ένας μεσαιωνικός οικισμός του 13ου αιώνα με έντονα καθολικά στοιχεία, στενά σκαλοπάτια και θέα στο Αιγαίο. Η Σύρος είναι επίσης φημισμένη για τα συριανά λουκούμια και τις χαλβαδόπιτες, αλλά και ως η πατρίδα του ρεμπέτικου και του Μάρκου Βαμβακάρη.'
    },
    best: { en: 'May–September, pleasant year-round for a city-style visit', el: 'Μάιος–Σεπτέμβριος, ευχάριστο όλο τον χρόνο για επίσκεψη σε στιλ πόλης' },
    highlights: {
      en: ['Miaouli Square & town hall', 'Ano Syros hilltop old town', 'Vaporia neoclassical mansions', 'Apollo Theatre', 'Local loukoumia & halvadopita', 'Markos Vamvakaris Museum'],
      el: ['Πλατεία Μιαούλη & δημαρχείο', 'Άνω Σύρος στην κορυφή του λόφου', 'Νεοκλασικά αρχοντικά στα Βαπόρια', 'Θέατρο Απόλλων', 'Συριανά λουκούμια & χαλβαδόπιτες', 'Μουσείο Μάρκου Βαμβακάρη']
    },
    sweet: { en: ['Loukoumi', 'Halvadopita'], el: ['Λουκούμι', 'Χαλβαδόπιτα'] }
  },
  {
    slug: 'spetses',
    group: 'saronic',
    groupName: { en: 'Saronic Islands', el: 'Σαρωνικά Νησιά' },
    name: { en: 'Spetses', el: 'Σπέτσες' },
    tagline: { en: 'Horse-drawn carriages, no cars in town', el: 'Άμαξες με άλογα, χωρίς αυτοκίνητα στην πόλη' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Spetses_Port_and_Agios_Mamas_Beach_on_Spetses%2C_Greece_%2848760450917%29.jpg?width=1400',
    credit: 'Flickr upload bot, CC BY 2.0',
    desc: {
      en: 'Spetses restricts cars in its main town, so horse-drawn carriages and bicycles are still a common way to get around. The waterfront is lined with grand 19th-century mansions built by the island\'s shipowning families, who played a leading role in the Greek War of Independence.',
      el: 'Η Σπέτσες περιορίζει τα αυτοκίνητα στην κύρια πόλη της, οπότε οι άμαξες με άλογα και τα ποδήλατα παραμένουν συνηθισμένος τρόπος μετακίνησης. Η παραλιακή είναι γεμάτη με επιβλητικά αρχοντικά του 19ου αιώνα, χτισμένα από τις εφοπλιστικές οικογένειες του νησιού, που έπαιξαν πρωταγωνιστικό ρόλο στην Ελληνική Επανάσταση.'
    },
    more: {
      en: 'The island was also the setting for John Fowles\' novel The Magus, and its pine-covered coastline has small pebble coves reachable by water taxi. Spetses is close enough to Athens for a weekend trip, but has kept a quieter, more residential feel than some of the other Saronic islands.',
      el: 'Το νησί ήταν επίσης το σκηνικό του μυθιστορήματος «Ο Μάγος» του John Fowles, και η πευκόφυτη ακτογραμμή του έχει μικρούς κολπίσκους με βότσαλα προσβάσιμους με υδροταξί. Η Σπέτσες βρίσκεται αρκετά κοντά στην Αθήνα για ένα Σαββατοκύριακο, αλλά έχει διατηρήσει πιο ήσυχη, πιο οικιστική ατμόσφαιρα από άλλα Σαρωνικά νησιά.'
    },
    more2: {
      en: 'In Dapia harbour sits the historic Poseidonion Grand Hotel, an iconic early 20th-century hotel reflecting Riviera luxury. History enthusiasts can visit the Museum of Bouboulina, housed in the 300-year-old mansion of the famous female naval commander, while the island\'s Old Harbour (Palia Limani) comes alive at night with seafood dining.',
      el: 'Στη Ντάπια δεσπόζει το ιστορικό Poseidonion Grand Hotel, σύμβολο πολυτέλειας των αρχών του 20ού αιώνα. Οι επισκέπτες μπορούν να επισκεφθούν το Μουσείο Μπουμπουλίνας, στο αρχοντικό της ηρωίδας του 1821, ενώ το Παλιό Λιμάνι ζωντανεύει το βράδυ για φαγητό και διασκέδαση.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Horse-drawn carriage rides', 'Old Harbour mansions', 'Water-taxi beach coves', 'Bekiris Cave', 'Bouboulina Museum', 'Dapia harbour & Poseidonion Hotel'],
      el: ['Βόλτα με άμαξα', 'Αρχοντικά στο Παλιό Λιμάνι', 'Κολπίσκοι με υδροταξί', 'Σπηλιά Μπεκίρη', 'Μουσείο Μπουμπουλίνας', 'Ντάπια & Ξενοδοχείο Ποσειδώνιο']
    },
    sweet: { en: ['Amygdalota'], el: ['Αμυγδαλωτά'] }
  },
  {
    slug: 'amorgos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Amorgos', el: 'Αμοργός' },
    tagline: { en: 'A monastery built into a cliff', el: 'Μοναστήρι χτισμένο μέσα σε γκρεμό' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Monastery_of_the_Panagia_Chozoviotissa%2C_Amorgos%2C_upper_courtyard%2C_18M1815.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Amorgos, one of the easternmost Cyclades, is best known for the Monastery of Panagia Chozoviotissa, a narrow white structure built directly into a cliff face 300 metres above the sea. The island gained wider recognition as the filming location for Luc Besson\'s 1988 film The Big Blue.',
      el: 'Η Αμοργός, ένα από τα ανατολικότερα νησιά των Κυκλάδων, είναι πιο γνωστή για τη Μονή της Παναγίας Χοζοβιώτισσας, ένα στενό λευκό κτίσμα χτισμένο απευθείας μέσα σε βράχο 300 μέτρα πάνω από τη θάλασσα. Το νησί έγινε ευρύτερα γνωστό ως τόπος γυρισμάτων της ταινίας «Το Μεγάλο Γαλάζιο» του Luc Besson το 1988.'
    },
    more: {
      en: 'The island is long and narrow, with two main settlements, Chora and Aigiali, connected by a scenic but winding road. Its rugged, dry landscape and network of hiking trails have made it popular with walkers looking for a quieter, more rugged Cycladic island.',
      el: 'Το νησί είναι μακρύ και στενό, με δύο κύριους οικισμούς, τη Χώρα και την Αιγιάλη, που συνδέονται με έναν γραφικό αλλά ελικοειδή δρόμο. Το βραχώδες, ξηρό τοπίο του και το δίκτυο μονοπατιών πεζοπορίας το έχουν κάνει δημοφιλές σε πεζοπόρους που αναζητούν ένα πιο ήσυχο, πιο άγριο κυκλαδίτικο νησί.'
    },
    more2: {
      en: 'On the south coast lies the scenic Olympia shipwreck, an abandoned cargo vessel resting in a shallow cove that featured in The Big Blue. The island is also celebrated for its traditional alcoholic spirit, Psimeni Raki, brewed locally with honey, cloves, and cinnamon.',
      el: 'Στη νότια ακτή βρίσκεται το ναυάγιο της Ολυμπίας, ένα εγκαταλελειμμένο πλοίο σε έναν ήσυχο όρμο που εμφανίζεται στο «Μεγάλο Γαλάζιο». Το νησί φημίζεται επίσης για την παραδοσιακή Ψημένη Ρακή, ένα τοπικό ποτό παρασκευασμένο με μέλι, γαρύφαλλο και κανέλα.'
    },
    best: { en: 'May–September', el: 'Μάιος–Σεπτέμβριος' },
    highlights: {
      en: ['Monastery of Panagia Chozoviotissa', 'Chora\'s Venetian castle ruins', 'Aigiali beach & village', 'Hiking trails between villages', 'Olympia shipwreck bay', 'Traditional Psimeni Raki tasting'],
      el: ['Μονή Παναγίας Χοζοβιώτισσας', 'Ερείπια βενετσιάνικου κάστρου στη Χώρα', 'Παραλία & χωριό Αιγιάλη', 'Μονοπάτια πεζοπορίας μεταξύ χωριών', 'Όρμος ναυαγίου Ολυμπία', 'Δοκιμή παραδοσιακής Ψημένης Ρακής']
    },
    sweet: { en: ['Pastel'], el: ['Παστέλι'] }
  },
  {
    slug: 'athens',
  group: 'attica',
  groupName: { en: 'Attica', el: 'Αττική' },
  name: { en: 'Athens', el: 'Αθήνα' },
  tagline: { 
    en: 'The historic heart of Western civilization', 
    el: 'Η ιστορική καρδιά του δυτικού πολιτισμού' 
  },
  img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Parthenon_from_Philopappos_2017.jpg?width=1400',
  credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
  desc: {
    en: 'Athens, the sprawling and vibrant capital of Greece, is globally renowned for its ancient landmarks, most notably the Acropolis and the Parthenon towering above the city. Blending thousands of years of rich history with a modern, dynamic urban culture, it serves as the cultural and political center of the nation.',
    el: 'Η Αθήνα, η χαώδης και ζωντανή πρωτεύουσα της Ελλάδας, είναι παγκοσμιότατα γνωστή για τα αρχαία της μνημεία, με κυριότερα την Ακρόπολη και τον Παρθενώνα που δεσπόζουν πάνω από την πόλη. Συνδυάζοντας χιλιάδες χρόνια πλούσιας ιστορίας με μια σύγχρονη, δυναμική αστική κουλτούρα, αποτελεί το πολιτιστικό και πολιτικό κέντρο του έθνους.'
  },
  more: {
    en: 'The city features a fascinating contrast between ancient ruins and lively neighborhoods like Plaka and Monastiraki, filled with neoclassical architecture, bustling markets, and rooftop cafes overlooking the illuminated monuments at night.',
    el: 'Η πόλη διαθέτει μια συναρπαστική αντίθεση ανάμεσα σε αρχαία ερείπια και ζωντανές γειτονιές όπως η Πλάκα και το Μοναστηράκι, γεμάτες νεοκλασική αρχιτεκτονική, πολυσύχναστες αγορές και καφέ ταράτσας με θέα στα φωτισμένα μνημεία τη νύχτα.'
  },
  more2: {
    en: 'Beyond the historical center, Athens offers a thriving culinary scene ranging from traditional tavernas serving souvlaki and mezedes to innovative Michelin-starred gastronomy, all complemented by the nearby coastal riviera and vibrant nightlife.',
    el: 'Πέρα από το ιστορικό κέντρο, η Αθήνα προσφέρει μια ακμάζουσα γαστρονομική σκηνή που κυμαίνεται από παραδοσιακές ταβέρνες με σουβλάκι και μεζέδες μέχρι καινοτόμα γαστρονομία βραβευμένη με αστέρια Michelin, όλα συνδυασμένα με την κοντινή αθηναϊκή ριβιέρα και τη ζωντανή νυχτερινή ζωή.'
  },
  best: { en: 'March–May & September–November', el: 'Μάρτιος–Μάιος & Σεπτέμβριος–Νοέμβριος' },
  highlights: {
    en: [
      'The Acropolis & Parthenon',
      'The Acropolis Museum',
      'Plaka & Anafiotika neighborhoods',
      'Ancient Agora & Temple of Hephaestus',
      'National Archaeological Museum',
      'Monastiraki flea market & rooftop bars'
    ],
    el: [
      'Η Ακρόπολη & ο Παρθενώνας',
      'Το Μουσείο της Ακρόπολης',
      'Οι γειτονιές Πλάκα & Αναφιώτικα',
      'Αρχαία Αγορά & Ναός του Ηφαίστου',
      'Εθνικό Αρχαιολογικό Μουσείο',
      'Υπαίθρια αγορά Μοναστηρακίου & roof bars'
    ]
  },
  sweet: { en: ['Loukoumades', 'Baklava'], el: ['Λουκουμάδες', 'Μπακλαβάς'] }
  },
  {
   slug: 'thessaloniki',
  group: 'macedonia',
  groupName: { en: 'Macedonia', el: 'Μακεδονία' },
  name: { en: 'Thessaloniki', el: 'Θεσσαλονίκη' },
  tagline: { 
    en: 'The vibrant cultural capital of Northern Greece', 
    el: 'Η ζωντανή πολιτιστική πρωτεύουσα της Βόρειας Ελλάδας' 
  },
  img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thessaloniki_White_Tower_and_waterfront_2019.jpg?width=1400',
  credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
  desc: {
    en: 'Thessaloniki, Greece\'s vibrant second-largest city, sits along the Thermaic Gulf and is renowned for its rich Byzantine heritage, lively atmosphere, and legendary food culture. Built with layers of Roman, Byzantine, and Ottoman history, it offers a youthful energy driven by its large student population.',
    el: 'Η Θεσσαλονίκη, η ζωντανή συμπρωτεύουσα της Ελλάδας, απλώνεται κατά μήκος του Θερμαϊκού κόλπου και φημίζεται για την πλούσια βυζαντινή της κληρονομιά, τη ζωντανή ατμόσφαιρα και τη θρυλική γαστρονομική της κουλτούρα. Χτισμένη με στρώματα ρωμαϊκής, βυζαντινής και οθωμανικής ιστορίας, προσφέρει μια νεανική ενέργεια που τροφοδοτείται από τον μεγάλο φοιτητικό της πληθυσμό.'
  },
  more: {
    en: 'The city is famous for its iconic White Tower on the bustling waterfront promenade, historic upper town (Ano Poli) with traditional Ottoman-era architecture, and a dynamic café culture where locals spend hours socializing.',
    el: 'Η πόλη είναι διάσημη για τον εμβληματικό Λευκό Πύργο στην πολυσύχναστη παραλιακή λεωφόρο, την ιστορική Άνω Πόλη με την παραδοσιακή αρχιτεκτονική οθωμανικής εποχής, και μια δυναμική κουλτούρα καφέ όπου οι ντόπιοι περνούν ώρες κοινωνικοποιούμενοι.'
  },
  more2: {
    en: 'Widely considered the culinary capital of the country, Thessaloniki blends traditional Macedonian recipes with Balkan and Middle Eastern influences, celebrated especially through its famous local pastries and vibrant markets like Kapani and Modiano.',
    el: 'Θεωρούμενη ευρέως ως η γαστρονομική πρωτεύουσα της χώρας, η Θεσσαλονίκη συνδυάζει παραδοσιακές μακεδονικές συνταγές με βαλκανικές και με Ανατολίτικες επιρροές, οι οποίες τιμώνται ιδιαίτερα μέσα από τα διάσημα τοπικά αρτοσκευάσματα και τις ζωντανές αγορές όπως το Καπάνι και η Μοδιάνο.'
  },
  best: { en: 'May–June & September–October', el: 'Μάιος–Ιούνιος & Σεπτέμβριος–Οκτώβριος' },
  highlights: {
    en: [
      'The White Tower of Thessaloniki',
      'Aristotelous Square & Waterfront Promenade',
      'Ano Poli (Upper Town) & Byzantine Walls',
      'Rotunda & Arch of Galerius',
      'Kapani & Modiano food markets',
      'Museum of Byzantine Culture'
    ],
    el: [
      'Ο Λευκός Πύργος Θεσσαλονίκης',
      'Πλατεία Αριστοτέλους & Παραλιακή Λεωφόρος',
      'Άνω Πόλη & Βυζαντινά Τείχη',
      'Ροτόντα & Αψίδα του Γαλερίου',
      'Αγορές τροφίμων Καπάνι & Μοδιάνο',
      'Μουσείο Βυζαντινού Πολιτισμού'
    ]
  },
  sweet: { en: ['Trigona Panormou', 'Bougatsa'], el: ['Τρίγωνα Πανοράματος', 'Μπουγάτσα'] }
  }
];
