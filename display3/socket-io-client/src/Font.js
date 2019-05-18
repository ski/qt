
import React, { Component } from "react";
import './App.css';
import v00 from "./images/white/0/0.png";
import v01 from "./images/white/0/1.png";
import v02 from "./images/white/0/2.png";
import v03 from "./images/white/0/3.png";

import v10 from "./images/white/1/0.png";
import v11 from "./images/white/1/1.png";
import v12 from "./images/white/1/2.png";
import v13 from "./images/white/1/3.png";

import v20 from "./images/white/2/0.png";
import v21 from "./images/white/2/1.png";
import v22 from "./images/white/2/2.png";
import v23 from "./images/white/2/3.png";

import v30 from "./images/white/3/0.png";
import v31 from "./images/white/3/1.png";
import v32 from "./images/white/3/2.png";
import v33 from "./images/white/3/3.png";

import v40 from "./images/white/4/0.png";
import v41 from "./images/white/4/1.png";
import v42 from "./images/white/4/2.png";
import v43 from "./images/white/4/3.png";


class Font extends Component {

    constructor(props) {
        super(props);
        this.fonts = [
            [v00,v01,v02,v03],
            [v10,v11,v12,v13],
            [v20,v21,v22,v23],
            [v30,v31,v32,v33],
            [v40,v41,v42,v43],
        ];               
    }


    //esel is thev verse selected, font is the image selected and the language is the language which will have the same esel
    makeVerses() {
        let verses = [];
        let eng = [];
        eng[0] = "And made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you.";
        eng[1] = "And not equal are the good deed and the bad. Repel [evil] by that [deed] which is better.";
        eng[2] = "And do good; indeed, Allah loves the doers of good.";
        eng[3] = 'So turn aside from them and say, "Peace"';
        eng[4] = "There shall be no compulsion in [acceptance of] the religion";
        verses.push(eng);

        let fra = [];
        fra[0] = "Et Nous avons fait de vous des nations et des tribus, pour que vous vous entre-connaissiez. Le plus noble d'entre vous, auprès d'Allah, est le plus pieux.";
        fra[1] = "La bonne action et la mauvaise ne sont pas pareilles. Repousse (le mal) par ce qui est meilleur.";
        fra[2] = "Et faites le bien. Car Allah aime les bienfaisants.";
        fra[3] = "Et bien, éloigne-toi d'eux (pardonne-leur); et dis: «Salut!»";
        fra[4] = "Nulle contrainte en religion!";
        verses.push(fra);

        let cn = [];
        cn[0] = "众人啊！我使你们成为许多民族和宗族，以便你们互相认识。在真主看来，你们中最尊贵者，是你们中最敬畏者。";
        cn[1] = "善恶不是一样的。你应当以最优美的品行去对付恶劣的品行，那末，与你相仇者，忽然间会变得亲如密友。";
        cn[2] = "你们应当行善；真主的确喜爱行善的人。";
        cn[3] = "你应当原谅他们，你应当说：祝你们平安！";
        cn[4] = "对於宗教，绝无强迫；";
        verses.push(cn);
        
        let hin = [];
        hin[0] = "लोगों हमने तो तुम सबको एक मर्द और एक औरत से पैदा किया और हम ही ने तुम्हारे कबीले और बिरादरियाँ बनायीं ताकि एक दूसरे की शिनाख्त करे इसमें शक़ नहीं कि ख़ुदा के नज़दीक तुम सबमें बड़ा इज्ज़तदार वही है जो बड़ा परहेज़गार हो";
        hin[1] = "भलाई और बुराई समान नहीं है। तुम (बुरे आचरण की बुराई को) अच्छे से अच्छे आचरण के द्वारा दूर करो।";
        hin[2] = "और अच्छे से अच्छा तरीक़ा अपनाओ। निस्संदेह अल्लाह अच्छे से अच्छा काम करनेवालों को पसन्द करता है";
        hin[3] = 'अच्छा तो उनसे नज़र फेर लो और कह दो, "सलाम है तुम्हें!"';
        hin[4] = "धर्म के विषय में कोई ज़बरदस्ती नहीं।";
        verses.push(hin);

        let es = [];
        es[0] = "y hemos hecho de vosotros pueblos y tribus, para que os conozcáis unos a otros. Para Alá, el más noble de entre vosotros es el que más Le teme";
        es[1] = "No es igual obrar bien y obrar mal. ¡Repele con lo que sea mejor.";
        es[2] = "Haced el bien. Alá ama a quienes hacen el bien.";
        es[3] = 'Apártate de ellos y [no respondas a sus ofensas, sino que] di: \"¡Paz!\"';
        es[4] = "no se puede forzar a nadie a creer";
        verses.push(es);

        let ru = [];
        ru[0] = "Люди! Мы составили из вас племена и поколения, чтобы вы знали одни других. Пред Богом тот из вас более имеет достоинства, кто из вас богобоязливее.";
        ru[1] = "Добро и зло не равны одно другому: тщись делать самое доброе,";
        ru[2] = "благодетельствуйте, потому что Бог любит благодетельствующих.";
        ru[3] = 'Так отстань от них, и скажи: "Мир!"';
        ru[4] = "В религии нет принуждения.";
        verses.push(ru);
        return verses;
    }

    render() {
        const {lang,verse,sel} = this.props;     
        let cali = this.fonts[sel];
        const translate = this.makeVerses()[lang][sel];
        return(
            
            <div className="onefont">
            <div className='figure'>
  <p><img className='font' src={cali[verse]}/></p>
  <figcaption>{translate}</figcaption>
</div></div>
      
        );
    }

}

export default Font;