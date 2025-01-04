const annoyingQuotes = [
   { id: 1, quote: "నువ్వు ఏ పని చేయకుండానే, ఎవరో వచ్చి నీ జీవితాన్ని మార్చేస్తారు అనుకుంటున్నావా? ఎండ మీద మంచం వేసుకుని పడుకున్నవాడివి!" },
    { id: 2, quote: "ఏరా, గత ఏడాది కూడా నువ్వు ఇలా చెప్పావు, 'ఇది నా సంవత్సరం' అని! ఈసారి కూడా అదే కబురా?" },
    { id: 3, quote: "జీవితం నీ కోసం ఆగదురా! నువ్వు మరింత ఆలస్యం చేస్తే, నీకు వేరే వార్షికాలు కూడా మిగలవు!" },
    { id: 4, quote: "ఆహా! ఈసారి కూడా నువ్వు సీరియస్ గా ఉండాలని అనుకుంటున్నావా? ఏది సీరియస్, నీ డ్రీమ్స్ లేదా నీ స్లీప్స్?" },
    { id: 5, quote: "ఏమండీ, కొత్త సంవత్సరం వచ్చిందని నీ పాత సోమరితనం మారుతుందని అనుకుంటున్నామా? జస్ట్ పేపర్ డేట్ మాత్రమే మారింది." },
    { id: 6, quote: "నువ్వు మారకపోతే, ఈ సంవత్సరం నీ జీవితంలో కూడా గత ఏడాది కంటే ఎక్కువ నష్టం చూపిస్తుంది!" },
    { id: 7, quote: "ఏంటిరా, గత ఏడాది ప్లాన్ చేసినది కూడా పూర్తి కాలేదే, ఇప్పుడు ఈ సంవత్సరం కొత్తది మొదలు పెడతావా?" },
    { id: 8, quote: "చివరికి, కాలం కూడా నీకంటే బాగా ఫాస్ట్ గా పని చేస్తుందురా! నీకు ఎప్పుడో పాతికేళ్ళు వచ్చేశాయ్!" },
    { id: 9, quote: "ముందు మోబైల్ పక్కన పెట్టి బతకడం నేర్చుకో రా! అది కూడా ఒక సక్సెస్ స్టార్టింగ్ పాయింట్." },
    { id: 10, quote: "నీలా ఉండే స్నేహితులు వల్ల, కాలం కూడా ఇప్పటికి విసిగిపోయింది... జస్ట్ ఏదైనా మంచిది చేయి!" },
    { id: 12, quote: "ఏమీ ఉండదు గత సంవత్సరం, ఈ సంవత్సరం ఒకటేలా ఉంటుంది. ఫస్ట్ వైబ్ ఆపేసి పని చేసుకోరా!" },
    { id: 11, quote: "నువ్వు చేసిన దారిద్రం ఏంటో తెలుసా? నీ దారిద్రం తెలుసుకోవడం. ఆ దారిద్రాన్ని చూపిస్తే తట్టుకోలేవు కానీ, పోయి పని చేసుకో!" },
    { id: 13, quote: "నీకు దేవత లాంటి అందం ఇచ్చిన దేవుడు, దయ్యం లాంటి బుద్ధి ఇచ్చాడు. నీకు త్వరలోనే 'మో' అనే అక్షరం తో పేరు మొదలయ్యే అబ్బాయితో స్నేహం ఏర్పడుతుంది. ఆ స్నేహం అందమైన _______  గా మారుతుంది." },
    { id: 14, quote: "నీకు ఈ సంవత్సరంలో మంచి మంచి అవకాశాలు వస్తాయి. వాటిని అందిపుచ్చుకుంటే బాగా ఎదుగుతావు, లేకపోతే లేదు." }
];

function setQuote() {
    const randomIndex = Math.floor(Math.random() * annoyingQuotes.length); 
    document.getElementById('disable').setAttribute("class","disabled");
    if(randomIndex+1==13){
        setQuote();
    }
    var name=document.getElementById("name").value;
    if(name.toUpperCase()==="PRIYANKA" || name.toUpperCase()==="PRIYANKA MYLAVARAPU" || name.toUpperCase()==="MYLAVARAPU PRIYANKA" || name.toUpperCase()==="PRIYANKAMYLAVARAPU" || name.toUpperCase()==="MYLAVARAPUPRIYANKA" || name.toUpperCase()==="PRIYANKA MYLAVARAPU" || name.toUpperCase()==="PINKY" || name.toUpperCase()==="PRIYANKA SHETTY" || name.toUpperCase()==="PREELUUU" || name.toUpperCase()==="PRELUU" ){
        document.getElementById('quoteDisplay').innerHTML=annoyingQuotes[12].quote; 
    }else{
        document.getElementById('quoteDisplay').innerHTML=annoyingQuotes[randomIndex].quote; 
    }
     
}


