import "./style.css";
import { records, decades, categoryLabels } from "./data/records.js";
import { editorialNotes, underlyingIssues, nbbfConstitution } from "./pages.js";
const coaches = [
  {
    name: "Abdulrahman Mohammed.",
    role: "Head Coach",
    years: [2018],
    wins: 3,
    silver: 1,
    bronze: 1,
    results: [{"year": 2018, "title": "FIBA Men's World Cup Qualification \u2014 2nd Window, Abidjan", "outcome": "win", "detail": "23rd to 25th February. Nigeria: 1st Place in Group Standing."}, {"year": 2018, "title": "FIBA Men 3X3 World Cup \u2014 Philippines", "outcome": "participated", "detail": "June 8th to 12th. 2nd Round. Nigeria: 17th Place."}, {"year": 2018, "title": "FIBA Men's World Cup Qualification \u2014 3rd Window, Lagos", "outcome": "win", "detail": "29th June to 1st July. Nigeria: 1st Place in Group Standing."}, {"year": 2018, "title": "FASU \u2014 Ethiopia", "outcome": "participated", "detail": "29th June to 8th July. B.U.K. (Female): 4th Place."}, {"year": 2018, "title": "FIBA 3X3 Africa Cup \u2014 Benin", "outcome": "runner-up", "detail": "16th and 17th August. Nigeria Women: 2nd Place. Nigeria Men: 2nd Place."}, {"year": 2018, "title": "FIBA World Cup Women \u2014 Tenerife, Spain", "outcome": "participated", "detail": "22nd to 30th September. Nigeria: 8th Position."}, {"year": 2018, "title": "Commonwealth Games (Blackgold) \u2014 Australia", "outcome": "participated", "detail": "Nigeria lost all 4 games to Australia, New Zealand, Canada and Scotland."}, {"year": 2018, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Cotonou", "outcome": "win", "detail": "28th November to 5th December. Rivers Hoopers: 1st Position."}, {"year": 2018, "title": "FIBA 3X3 Africa Cup \u2014 Lome, Togo", "outcome": "bronze", "detail": "1st to 7th November. Nigeria Men: 3rd Position. Nigeria Women: 4th Position."}]
  },
  {
    name: "Adamu Kuta",
    role: "Head Coach",
    years: [2008],
    wins: 4,
    silver: 0,
    bronze: 2,
    results: [{"year": 2008, "title": "FIBAFRICA U16 Junior Boys Finals \u2014 Maputo, Mozambique", "outcome": "bronze", "detail": "Nigeria: 3rd Position."}, {"year": 2008, "title": "FIBAFRICA Women Clubside Qualifiers Zone 3 \u2014 Cote d'Ivoire", "outcome": "win", "detail": "First Bank Qualified. Customs: 4th Position."}, {"year": 2008, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Lagos", "outcome": "win", "detail": "Kano Pillars: 1st Position."}, {"year": 2008, "title": "FIBAFRICA Women Clubside Finals \u2014 Kenya", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2008, "title": "FIBAFRICA U16 Male/Female Junior \u2014 Cotonou, Republic of Benin", "outcome": "win", "detail": "Nigeria Male: 3rd Position. Nigeria Female: 1st Position."}, {"year": 2008, "title": "FIBAFRICA Men Clubside Finals \u2014 Tunisia", "outcome": "participated", "detail": "Kano Pillars: 5th Position."}, {"year": 2008, "title": "FIBAFRICA U18 Male \u2014 Alexandria, Egypt", "outcome": "win", "detail": "18th to 26th October. 1st Place: Egypt. 2nd Place: Angola. 3rd Place: Nigeria. 12 Teams Participated."}]
  },
  {
    name: "Adeka Daudu.",
    role: "Head Coach",
    years: [2006],
    wins: 2,
    silver: 0,
    bronze: 2,
    results: [{"year": 2006, "title": "FIBAFRICA Women Clubside Finals \u2014 Gabon", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2006, "title": "Commonwealth Games \u2014 Melbourne, Australia", "outcome": "bronze", "detail": "Nigeria Women: 3rd Position. Nigeria Men: 4th Position. Men lost semi-final game \u2014 all players were home-based."}, {"year": 2006, "title": "World Women Championship \u2014 San Paolo, Brazil", "outcome": "participated", "detail": "Nigeria: 16th Position."}, {"year": 2006, "title": "FIBAFRICA Men Clubside Championship Cup \u2014 Lagos", "outcome": "win", "detail": "17th to 26th November. 1st Place: Athletico, Angola. 2nd Place: Primeiro, Angola. 3rd Place: Dodan Warriors. 4th Place: "}, {"year": 2006, "title": "FIBAFRICA U18 Boys Championship \u2014 South Africa", "outcome": "win", "detail": "Nigeria: 1st Position."}]
  },
  {
    name: "Agboola Pinheiro",
    role: "Assistant Coach",
    years: [1987],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Agoola Pinheiro",
    role: "Head Coach",
    years: [1987],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Al D-Ambrogio",
    role: "Head Coach",
    years: [1966],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Alabi Adelanwa.",
    role: "Head Coach",
    years: [1987],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Alabi Adelawa.",
    role: "Head Coach",
    years: [1984],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Ayilla Johnson",
    role: "Head Coach",
    years: [2015],
    wins: 5,
    silver: 0,
    bronze: 1,
    results: [{"year": 2015, "title": "FIBA AfroBasket Women \u2014 Cote d'Ivoire (Zone 3 Qualifier)", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2015, "title": "2015 NBBF/DSTV All Star Event \u2014 Basketball Legends Honored", "outcome": "participated", "detail": "23rd May, Lagos. Honored Legends include Oliver B. Johnson, Godwin Anani, Emmanuel Chagu, Alabi Adelanwa, Maj. Gen. Jose"}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Republic of Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Place. 6 Teams Participated."}, {"year": 2015, "title": "FIBA AfroBasket Finals \u2014 Tunis, Tunisia", "outcome": "win", "detail": "19th to 30th August. 1st Place: Nigeria. 2nd Place: Angola. 3rd Place: Senegal. 4th Place: Tunisia."}, {"year": 2015, "title": "All Africa Games \u2014 Brazzaville (DRC) Congo", "outcome": "participated", "detail": "Men: 1st: Angola. 2nd: Egypt. 3rd: Nigeria. Women: Nigeria won."}, {"year": 2015, "title": "FIBAFRICA Women Clubside Zone 3 Qualifiers \u2014 Cotonou, Republic of Benin", "outcome": "win", "detail": "First Bank Qualified."}, {"year": 2015, "title": "FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "participated", "detail": "First Bank: 4th Position."}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Cotonou, Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Position."}, {"year": 2015, "title": "FIBAFRICA U16 Male \u2014 Republic of Mali", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2015, "title": "FIBA AfroBasket Women \u2014 Yaounde, Cameroun", "outcome": "bronze", "detail": "Nigeria: 3rd Position."}, {"year": 2015, "title": "FIBAFRICA Clubside Finals \u2014 Luanda, Angola", "outcome": "participated", "detail": "10th to 20th December. Kano Pillars: 7th Position."}]
  },
  {
    name: "Ayinla Johnson",
    role: "Assistant Coach",
    years: [2014],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Ayo Bakare.",
    role: "Head Coach",
    years: [1998],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1998, "title": "World Men Championship \u2014 Athens, Greece", "outcome": "participated", "detail": "Nigeria: 13th Position."}]
  },
  {
    name: "Bako Francis",
    role: "Assistant Coach",
    years: [2012],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Capt. James Atungu.",
    role: "Head Coach",
    years: [1978],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Christopher Okon",
    role: "Assistant Coach",
    years: [2016],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Danjuma Dan A\'zumi",
    role: "Head Coach",
    years: [1987],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Danjuma Dan A\'zumi.",
    role: "Head Coach",
    years: [1988],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Dave Smith",
    role: "Head Coach",
    years: [1975],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1975, "title": "Expanded National Coaching Staff", "outcome": "participated", "detail": "Nigeria deploys multiple zone coaches across four regions alongside Coach OBJ and international coaches Brislav Radisic "}]
  },
  {
    name: "Dickson Tinism.",
    role: "Head Coach",
    years: [2012],
    wins: 2,
    silver: 1,
    bronze: 0,
    results: [{"year": 2012, "title": "FIBAFRICA U16 Junior Boys Qualifiers \u2014 Ouidah, Republic of Benin", "outcome": "runner-up", "detail": "December. Nigeria: 2nd Position."}, {"year": 2012, "title": "FIBAFRICA Women Clubside Finals \u2014 Tunisia", "outcome": "participated", "detail": "First Bank: 4th Position."}, {"year": 2012, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Liberia", "outcome": "win", "detail": "Kano Pillars: 1st Position."}, {"year": 2012, "title": "First Olympic Qualification \u2014 Men's Basketball", "outcome": "win", "detail": "Olympic Qualifiers, Venezuela. Nigeria's men qualify for the Olympic Games for the first time (Men). World Olympic Games"}, {"year": 2012, "title": "FIBAFRICA Men Clubside Finals \u2014 Republic of Angola", "outcome": "participated", "detail": "Kano Pillars: 7th Position."}]
  },
  {
    name: "Emma Odah",
    role: "Assistant Coach",
    years: [2013],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Emma Odah.",
    role: "Head Coach",
    years: [2010],
    wins: 2,
    silver: 0,
    bronze: 0,
    results: [{"year": 2010, "title": "All African Games/AfroBasket Qualifiers \u2014 Lome, Togo", "outcome": "win", "detail": "7th to 17th August. Nigeria won all matches to qualify in both events."}, {"year": 2010, "title": "FIBAFRICA U18 Male \u2014 Kigali, Rwanda", "outcome": "participated", "detail": "Nigeria: 9th Position."}, {"year": 2010, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Liberia", "outcome": "win", "detail": "Kano Pillars: 1st Position."}, {"year": 2010, "title": "FIBAFRICA Women Clubside Finals \u2014 Tunisia", "outcome": "participated", "detail": "First Bank: 4th Position."}, {"year": 2010, "title": "FIBAFRICA Men Clubside Finals \u2014 Republic of Benin", "outcome": "participated", "detail": "Kano Pillars: 4th Position."}, {"year": 2010, "title": "Commonwealth Games \u2014 Australia", "outcome": "participated", "detail": "Nigeria: 4th Position."}]
  },
  {
    name: "Emmanuel Chagu.",
    role: "Head Coach",
    years: [1983],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Emmanuel Odah",
    role: "Assistant Coach",
    years: [2011],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Emmanuel Okolo",
    role: "Assistant Coach",
    years: [2008],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Erinfolami Lateef",
    role: "Assistant Coach",
    years: [2013],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Fubaru Onyanabo.",
    role: "Head Coach",
    years: [2019],
    wins: 2,
    silver: 0,
    bronze: 2,
    results: [{"year": 2019, "title": "FIBA U16 Championship \u2014 Cape Verde", "outcome": "bronze", "detail": "4th to 15th July. Nigeria: 3rd Place. 6 Nations Participated."}, {"year": 2019, "title": "FIBA AfroBasket Men \u2014 Mali (2nd Round)", "outcome": "participated", "detail": "19th to 27th July."}, {"year": 2019, "title": "FIBA AfroBasket Women \u2014 Dakar, Senegal", "outcome": "win", "detail": "10th to 18th August. Nigeria: 1st Place (D'Tigress)."}, {"year": 2019, "title": "D'Tigers Qualify for Tokyo Olympics", "outcome": "win", "detail": "Men's World Cup China, August 31st to September 15th. Nigeria qualified for the Olympic Games Tokyo 2020."}, {"year": 2019, "title": "Women's Olympic Pre-Qualification Tournament \u2014 Maputo, Mozambique", "outcome": "participated", "detail": "14th to 17th November."}, {"year": 2019, "title": "3X3 FIBA Africa Cup \u2014 Uganda", "outcome": "bronze", "detail": "8th to 19th November. Nigeria U16 Girls: Bronze."}]
  },
  {
    name: "Hassan Azem.",
    role: "Head Coach",
    years: [1966],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Jimmy Vidal",
    role: "Assistant Coach",
    years: [1985],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "John Banjo.",
    role: "Head Coach",
    years: [1980],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1980, "title": "Dr. C.O. Williams Elected AFABA Vice President", "outcome": "participated", "detail": "Dr. C.O. Williams elected Vice President of AFABA and President Africa Zone 3 at meeting in Rabat. Alabi Adelanwa electe"}]
  },
  {
    name: "John Lucas",
    role: "Head Coach",
    years: [2009],
    wins: 2,
    silver: 0,
    bronze: 0,
    results: [{"year": 2009, "title": "NBBF Board Transition \u2014 Tijjani Umar Era Begins", "outcome": "participated", "detail": "Sports Minister appoints Special Task Force March 2009. New Board declared with Tijjani Umar as President. Federation el"}, {"year": 2009, "title": "25th FIBA AfroBasket Men \u2014 Libya", "outcome": "participated", "detail": "Nigeria at the Quarter Finals. Nigeria: 5th Position."}, {"year": 2009, "title": "FIBAFRICA Women Clubside Zone 3 Qualifiers \u2014 Abidjan, Cote d'Ivoire", "outcome": "participated", "detail": "First Deepwater and First Bank participated."}, {"year": 2009, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Ouidah, Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position."}, {"year": 2009, "title": "15th FIBAFRICA Women Clubside Finals \u2014 Cotonou, Benin", "outcome": "win", "detail": "November. First Bank: 1st Position."}, {"year": 2009, "title": "21st FIBA AfroBasket Women \u2014 Antananarivo, Madagascar", "outcome": "participated", "detail": "October. Nigeria: 5th Position."}, {"year": 2009, "title": "FIBAFRICA Men Clubside Finals \u2014 Kigali, Rwanda", "outcome": "participated", "detail": "December. Kano Pillars: 5th Position."}]
  },
  {
    name: "Jonathan Chagu",
    role: "Assistant Coach",
    years: [1987],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Jonathan Chagu.",
    role: "Head Coach",
    years: [1981],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Kevin Cook",
    role: "Head Coach",
    years: [2006],
    wins: 2,
    silver: 0,
    bronze: 2,
    results: [{"year": 2006, "title": "FIBAFRICA Women Clubside Finals \u2014 Gabon", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2006, "title": "Commonwealth Games \u2014 Melbourne, Australia", "outcome": "bronze", "detail": "Nigeria Women: 3rd Position. Nigeria Men: 4th Position. Men lost semi-final game \u2014 all players were home-based."}, {"year": 2006, "title": "World Women Championship \u2014 San Paolo, Brazil", "outcome": "participated", "detail": "Nigeria: 16th Position."}, {"year": 2006, "title": "FIBAFRICA Men Clubside Championship Cup \u2014 Lagos", "outcome": "win", "detail": "17th to 26th November. 1st Place: Athletico, Angola. 2nd Place: Primeiro, Angola. 3rd Place: Dodan Warriors. 4th Place: "}, {"year": 2006, "title": "FIBAFRICA U18 Boys Championship \u2014 South Africa", "outcome": "win", "detail": "Nigeria: 1st Position."}]
  },
  {
    name: "Kevin Cook.",
    role: "Head Coach",
    years: [2007],
    wins: 0,
    silver: 1,
    bronze: 0,
    results: [{"year": 2007, "title": "All African Games \u2014 Algiers, Algeria", "outcome": "runner-up", "detail": "Nigeria Men: Bronze Medal. Nigeria Women: Silver Medal."}, {"year": 2007, "title": "FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "participated", "detail": "First Bank: 7th Position."}]
  },
  {
    name: "Kofoworola Olorunsola.",
    role: "Head Coach",
    years: [1999],
    wins: 1,
    silver: 1,
    bronze: 1,
    results: [{"year": 1999, "title": "AfroBasket \u2014 Angola", "outcome": "runner-up", "detail": "Nigeria: Silver Medal."}, {"year": 1999, "title": "All African Games \u2014 South Africa", "outcome": "bronze", "detail": "Nigeria Men: 3rd Position. Nigeria Women: 3rd Position."}, {"year": 1999, "title": "6th World U19 Men's Championship \u2014 Lisbon, Portugal", "outcome": "win", "detail": "15th to 25th July. 1st Place: Spain. 2nd Place: USA. 3rd Place: Croatia. Nigeria: 13th Place. 16 Teams Participated."}, {"year": 1999, "title": "FISU World University Games \u2014 Palma de Majorca, Spain", "outcome": "participated", "detail": "2nd to 13th July. Nigeria: 11th Position."}]
  },
  {
    name: "Kofoworola Olorunsola/Mike Akuboh.",
    role: "Head Coach",
    years: [2001],
    wins: 0,
    silver: 1,
    bronze: 0,
    results: [{"year": 2001, "title": "FISU \u2014 Beijing, China", "outcome": "participated", "detail": "August. Nigeria Men: 16th Position. Nigeria Women: 21st Position."}, {"year": 2001, "title": "FIBA AfroBasket \u2014 Egypt", "outcome": "runner-up", "detail": "Nigeria: 2nd Position."}, {"year": 2001, "title": "African Nations Cup \u2014 Morocco", "outcome": "participated", "detail": "Nigeria: 5th Position."}]
  },
  {
    name: "Kofoworola Olorunsola/Shibi Emmanuel.",
    role: "Head Coach",
    years: [1997],
    wins: 0,
    silver: 1,
    bronze: 0,
    results: [{"year": 1997, "title": "FISU \u2014 Sicily, Italy", "outcome": "participated", "detail": "19th to 30th August. Nigeria: 6th Position."}, {"year": 1997, "title": "African Nations Cup \u2014 Dakar, Senegal", "outcome": "runner-up", "detail": "Nigeria: 2nd Position."}]
  },
  {
    name: "Lateef Folami",
    role: "Assistant Coach",
    years: [1999],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Lemmy Harry",
    role: "Head Coach",
    years: [1985],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Lemmy Harry.",
    role: "Head Coach",
    years: [1982],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Major Tunde Panox.",
    role: "Head Coach",
    years: [1979],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Mohammed Jagu",
    role: "Assistant Coach",
    years: [2012],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Ogoh",
    role: "Assistant Coach",
    years: [2013],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Otis Hughley.",
    role: "Head Coach",
    years: [2020],
    wins: 1,
    silver: 0,
    bronze: 0,
    results: [{"year": 2020, "title": "D'Tigress Qualify for Tokyo Olympics", "outcome": "win", "detail": "FIBA Women Olympic Qualifiers, Belgrade, Serbia. Nigeria qualified. Both D'Tigers (men) and D'Tigress (women) headed to "}]
  },
  {
    name: "Peter Ahmedu.",
    role: "Head Coach",
    years: [2016],
    wins: 2,
    silver: 1,
    bronze: 1,
    results: [{"year": 2016, "title": "FIBAFRICA Women Clubside Zone 3 Eliminations \u2014 Cotonou, Republic of Benin", "outcome": "win", "detail": "First Bank Qualified."}, {"year": 2016, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Lome, Togo", "outcome": "win", "detail": "Kano Pillars: 1st Position. Customs: 2nd Position."}, {"year": 2016, "title": "FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "bronze", "detail": "First Bank: 3rd Place."}, {"year": 2016, "title": "FIBAFRICA Clubside Championship Finals \u2014 Egypt", "outcome": "participated", "detail": "Kano Pillars: 4th Position."}, {"year": 2016, "title": "FIBAFRICA U16 Girls \u2014 Madagascar", "outcome": "runner-up", "detail": "Nigeria: 2nd Position."}]
  },
  {
    name: "Pinheiro Agboola",
    role: "Head Coach",
    years: [1982],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Prof",
    role: "Assistant Coach",
    years: [1999],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Roderick Robinson",
    role: "Head Coach",
    years: [1978],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Roderick Robinson aka Boonie.",
    role: "Head Coach",
    years: [1977],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Roland Onabemoi",
    role: "Head Coach",
    years: [1987],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Sani Ahmed.",
    role: "Head Coach",
    years: [2014],
    wins: 1,
    silver: 0,
    bronze: 0,
    results: [{"year": 2014, "title": "FIBA AfroBasket Qualifiers \u2014 Burkina Faso", "outcome": "participated", "detail": "Nigeria won all matches."}, {"year": 2014, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Burkina Faso", "outcome": "win", "detail": "Markmentors Qualified. Kano Pillars: 3rd Position."}, {"year": 2014, "title": "Four Nations Invitational Tournament \u2014 South Africa", "outcome": "participated", "detail": "Nigeria won Gold."}, {"year": 2014, "title": "FIBAFRICA Women Clubside Finals \u2014 Tunisia", "outcome": "participated", "detail": "First Bank: 4th Position."}, {"year": 2014, "title": "FIBAFRICA Clubside Championship Finals \u2014 Tunis, Tunisia", "outcome": "participated", "detail": "Markmentors: 9th Position."}]
  },
  {
    name: "Selbut Nims",
    role: "Head Coach",
    years: [2003],
    wins: 3,
    silver: 0,
    bronze: 0,
    results: [{"year": 2003, "title": "AfroBasket \u2014 Morocco", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2003, "title": "BB4P (Basketball for Peace) Founded", "outcome": "participated", "detail": "Basketball for Peace (BB4P) registered as NGO, implementing partners of USAID in Kaduna. Coach OBJ's organisation to add"}, {"year": 2003, "title": "10th FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "First Bank: 1st Position."}, {"year": 2003, "title": "COJA 8th All Africa Games \u2014 Abuja", "outcome": "win", "detail": "Nigeria Men: Bronze Medal. Nigeria Women: Gold Medal."}, {"year": 2003, "title": "18th FIBAFRICA Women's Nation Cup Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "Nigeria: Gold Medal."}, {"year": 2003, "title": "7th FIBA World Junior Championship Finals \u2014 Thessaloniki, Greece", "outcome": "participated", "detail": "Nigeria: 11th Position."}]
  },
  {
    name: "Sharon Skjong.",
    role: "Head Coach",
    years: [1975],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1975, "title": "Expanded National Coaching Staff", "outcome": "participated", "detail": "Nigeria deploys multiple zone coaches across four regions alongside Coach OBJ and international coaches Brislav Radisic "}]
  },
  {
    name: "Shola Shomala",
    role: "Assistant Coach",
    years: [2009],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Simeon Agboola Pinheiro.",
    role: "Head Coach",
    years: [1990],
    wins: 1,
    silver: 0,
    bronze: 0,
    results: [{"year": 1990, "title": "FIBA Referee Course \u2014 Somalia", "outcome": "participated", "detail": "Jimmy Ahmed & Chris Obojememe attended."}, {"year": 1990, "title": "African Junior Championship \u2014 Luanda, Angola", "outcome": "win", "detail": "September 6th to 17th. 1st Place: Nigeria (sponsored by UBA). 2nd Place: Angola. 3rd Place: Cameroun. 3 Teams Participat"}]
  },
  {
    name: "Sonoiki T. Bamidele",
    role: "Head Coach",
    years: [2003],
    wins: 3,
    silver: 0,
    bronze: 0,
    results: [{"year": 2003, "title": "AfroBasket \u2014 Morocco", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2003, "title": "BB4P (Basketball for Peace) Founded", "outcome": "participated", "detail": "Basketball for Peace (BB4P) registered as NGO, implementing partners of USAID in Kaduna. Coach OBJ's organisation to add"}, {"year": 2003, "title": "10th FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "First Bank: 1st Position."}, {"year": 2003, "title": "COJA 8th All Africa Games \u2014 Abuja", "outcome": "win", "detail": "Nigeria Men: Bronze Medal. Nigeria Women: Gold Medal."}, {"year": 2003, "title": "18th FIBAFRICA Women's Nation Cup Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "Nigeria: Gold Medal."}, {"year": 2003, "title": "7th FIBA World Junior Championship Finals \u2014 Thessaloniki, Greece", "outcome": "participated", "detail": "Nigeria: 11th Position."}]
  },
  {
    name: "Steve Ushie",
    role: "Assistant Coach",
    years: [1988],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Tari Preh",
    role: "Assistant Coach",
    years: [1999],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Tari Preh.",
    role: "Head Coach",
    years: [2015],
    wins: 5,
    silver: 0,
    bronze: 1,
    results: [{"year": 2015, "title": "FIBA AfroBasket Women \u2014 Cote d'Ivoire (Zone 3 Qualifier)", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2015, "title": "2015 NBBF/DSTV All Star Event \u2014 Basketball Legends Honored", "outcome": "participated", "detail": "23rd May, Lagos. Honored Legends include Oliver B. Johnson, Godwin Anani, Emmanuel Chagu, Alabi Adelanwa, Maj. Gen. Jose"}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Republic of Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Place. 6 Teams Participated."}, {"year": 2015, "title": "FIBA AfroBasket Finals \u2014 Tunis, Tunisia", "outcome": "win", "detail": "19th to 30th August. 1st Place: Nigeria. 2nd Place: Angola. 3rd Place: Senegal. 4th Place: Tunisia."}, {"year": 2015, "title": "All Africa Games \u2014 Brazzaville (DRC) Congo", "outcome": "participated", "detail": "Men: 1st: Angola. 2nd: Egypt. 3rd: Nigeria. Women: Nigeria won."}, {"year": 2015, "title": "FIBAFRICA Women Clubside Zone 3 Qualifiers \u2014 Cotonou, Republic of Benin", "outcome": "win", "detail": "First Bank Qualified."}, {"year": 2015, "title": "FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "participated", "detail": "First Bank: 4th Position."}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Cotonou, Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Position."}, {"year": 2015, "title": "FIBAFRICA U16 Male \u2014 Republic of Mali", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2015, "title": "FIBA AfroBasket Women \u2014 Yaounde, Cameroun", "outcome": "bronze", "detail": "Nigeria: 3rd Position."}, {"year": 2015, "title": "FIBAFRICA Clubside Finals \u2014 Luanda, Angola", "outcome": "participated", "detail": "10th to 20th December. Kano Pillars: 7th Position."}]
  },
  {
    name: "Temcov.",
    role: "Head Coach",
    years: [1986],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Thomas Bryan.",
    role: "Head Coach",
    years: [1968],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Toyin Shonoiki/Fred Oniga.",
    role: "Head Coach",
    years: [1993],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1993, "title": "NABBA Becomes NBBF \u2014 Inauguration", "outcome": "participated", "detail": "Inauguration of the Nigeria Basketball Federation (NBBF) from Nigeria Amateur Basketball Association (NABBA), 4th March "}, {"year": 1993, "title": "FIBAFRICA Clubside Women Qualifiers \u2014 Lagos", "outcome": "participated", "detail": "3rd July. Eko Fliers 65 vs Bamako 54. 2nd Leg (31st July, Bamako): Eko Fliers vs Bamako."}]
  },
  {
    name: "Voya Vogislav",
    role: "Head Coach",
    years: [1978],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Walid Zabadne",
    role: "Head Coach",
    years: [1966],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Will Voigt",
    role: "Head Coach",
    years: [2015],
    wins: 5,
    silver: 0,
    bronze: 1,
    results: [{"year": 2015, "title": "FIBA AfroBasket Women \u2014 Cote d'Ivoire (Zone 3 Qualifier)", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2015, "title": "2015 NBBF/DSTV All Star Event \u2014 Basketball Legends Honored", "outcome": "participated", "detail": "23rd May, Lagos. Honored Legends include Oliver B. Johnson, Godwin Anani, Emmanuel Chagu, Alabi Adelanwa, Maj. Gen. Jose"}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Republic of Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Place. 6 Teams Participated."}, {"year": 2015, "title": "FIBA AfroBasket Finals \u2014 Tunis, Tunisia", "outcome": "win", "detail": "19th to 30th August. 1st Place: Nigeria. 2nd Place: Angola. 3rd Place: Senegal. 4th Place: Tunisia."}, {"year": 2015, "title": "All Africa Games \u2014 Brazzaville (DRC) Congo", "outcome": "participated", "detail": "Men: 1st: Angola. 2nd: Egypt. 3rd: Nigeria. Women: Nigeria won."}, {"year": 2015, "title": "FIBAFRICA Women Clubside Zone 3 Qualifiers \u2014 Cotonou, Republic of Benin", "outcome": "win", "detail": "First Bank Qualified."}, {"year": 2015, "title": "FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "participated", "detail": "First Bank: 4th Position."}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Cotonou, Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Position."}, {"year": 2015, "title": "FIBAFRICA U16 Male \u2014 Republic of Mali", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2015, "title": "FIBA AfroBasket Women \u2014 Yaounde, Cameroun", "outcome": "bronze", "detail": "Nigeria: 3rd Position."}, {"year": 2015, "title": "FIBAFRICA Clubside Finals \u2014 Luanda, Angola", "outcome": "participated", "detail": "10th to 20th December. Kano Pillars: 7th Position."}]
  },
  {
    name: "Abdulrahaman",
    role: "Assistant Coach",
    years: [2013, 2015],
    wins: 5,
    silver: 0,
    bronze: 1,
    results: [{"year": 2015, "title": "FIBA AfroBasket Women \u2014 Cote d'Ivoire (Zone 3 Qualifier)", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2015, "title": "2015 NBBF/DSTV All Star Event \u2014 Basketball Legends Honored", "outcome": "participated", "detail": "23rd May, Lagos. Honored Legends include Oliver B. Johnson, Godwin Anani, Emmanuel Chagu, Alabi Adelanwa, Maj. Gen. Jose"}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Republic of Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Place. 6 Teams Participated."}, {"year": 2015, "title": "FIBA AfroBasket Finals \u2014 Tunis, Tunisia", "outcome": "win", "detail": "19th to 30th August. 1st Place: Nigeria. 2nd Place: Angola. 3rd Place: Senegal. 4th Place: Tunisia."}, {"year": 2015, "title": "All Africa Games \u2014 Brazzaville (DRC) Congo", "outcome": "participated", "detail": "Men: 1st: Angola. 2nd: Egypt. 3rd: Nigeria. Women: Nigeria won."}, {"year": 2015, "title": "FIBAFRICA Women Clubside Zone 3 Qualifiers \u2014 Cotonou, Republic of Benin", "outcome": "win", "detail": "First Bank Qualified."}, {"year": 2015, "title": "FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "participated", "detail": "First Bank: 4th Position."}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Cotonou, Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Position."}, {"year": 2015, "title": "FIBAFRICA U16 Male \u2014 Republic of Mali", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2015, "title": "FIBA AfroBasket Women \u2014 Yaounde, Cameroun", "outcome": "bronze", "detail": "Nigeria: 3rd Position."}, {"year": 2015, "title": "FIBAFRICA Clubside Finals \u2014 Luanda, Angola", "outcome": "participated", "detail": "10th to 20th December. Kano Pillars: 7th Position."}]
  },
  {
    name: "Aderemi Adewunmi",
    role: "Head Coach",
    years: [2010, 2013],
    wins: 2,
    silver: 0,
    bronze: 0,
    results: [{"year": 2010, "title": "All African Games/AfroBasket Qualifiers \u2014 Lome, Togo", "outcome": "win", "detail": "7th to 17th August. Nigeria won all matches to qualify in both events."}, {"year": 2010, "title": "FIBAFRICA U18 Male \u2014 Kigali, Rwanda", "outcome": "participated", "detail": "Nigeria: 9th Position."}, {"year": 2010, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Liberia", "outcome": "win", "detail": "Kano Pillars: 1st Position."}, {"year": 2010, "title": "FIBAFRICA Women Clubside Finals \u2014 Tunisia", "outcome": "participated", "detail": "First Bank: 4th Position."}, {"year": 2010, "title": "FIBAFRICA Men Clubside Finals \u2014 Republic of Benin", "outcome": "participated", "detail": "Kano Pillars: 4th Position."}, {"year": 2010, "title": "Commonwealth Games \u2014 Australia", "outcome": "participated", "detail": "Nigeria: 4th Position."}]
  },
  {
    name: "Augustine Oniga",
    role: "Assistant Coach",
    years: [1979, 1982],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Bala Umar",
    role: "Assistant Coach",
    years: [1990, 2012],
    wins: 2,
    silver: 1,
    bronze: 0,
    results: [{"year": 2012, "title": "FIBAFRICA U16 Junior Boys Qualifiers \u2014 Ouidah, Republic of Benin", "outcome": "runner-up", "detail": "December. Nigeria: 2nd Position."}, {"year": 2012, "title": "FIBAFRICA Women Clubside Finals \u2014 Tunisia", "outcome": "participated", "detail": "First Bank: 4th Position."}, {"year": 2012, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Liberia", "outcome": "win", "detail": "Kano Pillars: 1st Position."}, {"year": 2012, "title": "First Olympic Qualification \u2014 Men's Basketball", "outcome": "win", "detail": "Olympic Qualifiers, Venezuela. Nigeria's men qualify for the Olympic Games for the first time (Men). World Olympic Games"}, {"year": 2012, "title": "FIBAFRICA Men Clubside Finals \u2014 Republic of Angola", "outcome": "participated", "detail": "Kano Pillars: 7th Position."}]
  },
  {
    name: "Bala Usman",
    role: "Head Coach",
    years: [1982, 1999],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Clyde Brown",
    role: "Head Coach",
    years: [1975, 1976],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1975, "title": "Expanded National Coaching Staff", "outcome": "participated", "detail": "Nigeria deploys multiple zone coaches across four regions alongside Coach OBJ and international coaches Brislav Radisic "}]
  },
  {
    name: "Emma Chagu",
    role: "Head Coach",
    years: [1975, 1976],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1975, "title": "Expanded National Coaching Staff", "outcome": "participated", "detail": "Nigeria deploys multiple zone coaches across four regions alongside Coach OBJ and international coaches Brislav Radisic "}]
  },
  {
    name: "Ganiyu Otenigbagbe.",
    role: "Head Coach",
    years: [1976, 1985],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Lateef Erinfolami",
    role: "Assistant Coach",
    years: [2005, 2015],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Lateef Erinfolami.",
    role: "Head Coach",
    years: [2008, 2009],
    wins: 6,
    silver: 0,
    bronze: 2,
    results: [{"year": 2008, "title": "FIBAFRICA U16 Junior Boys Finals \u2014 Maputo, Mozambique", "outcome": "bronze", "detail": "Nigeria: 3rd Position."}, {"year": 2008, "title": "FIBAFRICA Women Clubside Qualifiers Zone 3 \u2014 Cote d'Ivoire", "outcome": "win", "detail": "First Bank Qualified. Customs: 4th Position."}, {"year": 2008, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Lagos", "outcome": "win", "detail": "Kano Pillars: 1st Position."}, {"year": 2008, "title": "FIBAFRICA Women Clubside Finals \u2014 Kenya", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2008, "title": "FIBAFRICA U16 Male/Female Junior \u2014 Cotonou, Republic of Benin", "outcome": "win", "detail": "Nigeria Male: 3rd Position. Nigeria Female: 1st Position."}, {"year": 2008, "title": "FIBAFRICA Men Clubside Finals \u2014 Tunisia", "outcome": "participated", "detail": "Kano Pillars: 5th Position."}, {"year": 2008, "title": "FIBAFRICA U18 Male \u2014 Alexandria, Egypt", "outcome": "win", "detail": "18th to 26th October. 1st Place: Egypt. 2nd Place: Angola. 3rd Place: Nigeria. 12 Teams Participated."}, {"year": 2009, "title": "NBBF Board Transition \u2014 Tijjani Umar Era Begins", "outcome": "participated", "detail": "Sports Minister appoints Special Task Force March 2009. New Board declared with Tijjani Umar as President. Federation el"}, {"year": 2009, "title": "25th FIBA AfroBasket Men \u2014 Libya", "outcome": "participated", "detail": "Nigeria at the Quarter Finals. Nigeria: 5th Position."}, {"year": 2009, "title": "FIBAFRICA Women Clubside Zone 3 Qualifiers \u2014 Abidjan, Cote d'Ivoire", "outcome": "participated", "detail": "First Deepwater and First Bank participated."}, {"year": 2009, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Ouidah, Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position."}, {"year": 2009, "title": "15th FIBAFRICA Women Clubside Finals \u2014 Cotonou, Benin", "outcome": "win", "detail": "November. First Bank: 1st Position."}, {"year": 2009, "title": "21st FIBA AfroBasket Women \u2014 Antananarivo, Madagascar", "outcome": "participated", "detail": "October. Nigeria: 5th Position."}, {"year": 2009, "title": "FIBAFRICA Men Clubside Finals \u2014 Kigali, Rwanda", "outcome": "participated", "detail": "December. Kano Pillars: 5th Position."}]
  },
  {
    name: "Ogoh Odaudu",
    role: "Assistant Coach",
    years: [2010, 2015],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Otis Hughley",
    role: "Head Coach",
    years: [2018, 2019],
    wins: 5,
    silver: 1,
    bronze: 3,
    results: [{"year": 2018, "title": "FIBA Men's World Cup Qualification \u2014 2nd Window, Abidjan", "outcome": "win", "detail": "23rd to 25th February. Nigeria: 1st Place in Group Standing."}, {"year": 2018, "title": "FIBA Men 3X3 World Cup \u2014 Philippines", "outcome": "participated", "detail": "June 8th to 12th. 2nd Round. Nigeria: 17th Place."}, {"year": 2018, "title": "FIBA Men's World Cup Qualification \u2014 3rd Window, Lagos", "outcome": "win", "detail": "29th June to 1st July. Nigeria: 1st Place in Group Standing."}, {"year": 2018, "title": "FASU \u2014 Ethiopia", "outcome": "participated", "detail": "29th June to 8th July. B.U.K. (Female): 4th Place."}, {"year": 2018, "title": "FIBA 3X3 Africa Cup \u2014 Benin", "outcome": "runner-up", "detail": "16th and 17th August. Nigeria Women: 2nd Place. Nigeria Men: 2nd Place."}, {"year": 2018, "title": "FIBA World Cup Women \u2014 Tenerife, Spain", "outcome": "participated", "detail": "22nd to 30th September. Nigeria: 8th Position."}, {"year": 2018, "title": "Commonwealth Games (Blackgold) \u2014 Australia", "outcome": "participated", "detail": "Nigeria lost all 4 games to Australia, New Zealand, Canada and Scotland."}, {"year": 2018, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Cotonou", "outcome": "win", "detail": "28th November to 5th December. Rivers Hoopers: 1st Position."}, {"year": 2018, "title": "FIBA 3X3 Africa Cup \u2014 Lome, Togo", "outcome": "bronze", "detail": "1st to 7th November. Nigeria Men: 3rd Position. Nigeria Women: 4th Position."}, {"year": 2019, "title": "FIBA U16 Championship \u2014 Cape Verde", "outcome": "bronze", "detail": "4th to 15th July. Nigeria: 3rd Place. 6 Nations Participated."}, {"year": 2019, "title": "FIBA AfroBasket Men \u2014 Mali (2nd Round)", "outcome": "participated", "detail": "19th to 27th July."}, {"year": 2019, "title": "FIBA AfroBasket Women \u2014 Dakar, Senegal", "outcome": "win", "detail": "10th to 18th August. Nigeria: 1st Place (D'Tigress)."}, {"year": 2019, "title": "D'Tigers Qualify for Tokyo Olympics", "outcome": "win", "detail": "Men's World Cup China, August 31st to September 15th. Nigeria qualified for the Olympic Games Tokyo 2020."}, {"year": 2019, "title": "Women's Olympic Pre-Qualification Tournament \u2014 Maputo, Mozambique", "outcome": "participated", "detail": "14th to 17th November."}, {"year": 2019, "title": "3X3 FIBA Africa Cup \u2014 Uganda", "outcome": "bronze", "detail": "8th to 19th November. Nigeria U16 Girls: Bronze."}]
  },
  {
    name: "Sam Vincent.",
    role: "Head Coach",
    years: [2003, 2004],
    wins: 4,
    silver: 1,
    bronze: 0,
    results: [{"year": 2003, "title": "AfroBasket \u2014 Morocco", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2003, "title": "BB4P (Basketball for Peace) Founded", "outcome": "participated", "detail": "Basketball for Peace (BB4P) registered as NGO, implementing partners of USAID in Kaduna. Coach OBJ's organisation to add"}, {"year": 2003, "title": "10th FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "First Bank: 1st Position."}, {"year": 2003, "title": "COJA 8th All Africa Games \u2014 Abuja", "outcome": "win", "detail": "Nigeria Men: Bronze Medal. Nigeria Women: Gold Medal."}, {"year": 2003, "title": "18th FIBAFRICA Women's Nation Cup Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "Nigeria: Gold Medal."}, {"year": 2003, "title": "7th FIBA World Junior Championship Finals \u2014 Thessaloniki, Greece", "outcome": "participated", "detail": "Nigeria: 11th Position."}, {"year": 2004, "title": "FIBAFRICA Women Clubside Finals \u2014 Senegal", "outcome": "runner-up", "detail": "First Bank: 2nd Position."}, {"year": 2004, "title": "FIBU21 Finals \u2014 Dakar, Senegal", "outcome": "win", "detail": "Nigeria: 1st Position \u2014 Gold Medal."}, {"year": 2004, "title": "Olympic Games \u2014 Athens, Greece (Women)", "outcome": "participated", "detail": "Nigeria: 11th Position."}]
  },
  {
    name: "Thomas Bryan",
    role: "Head Coach",
    years: [1969, 1970],
    wins: 0,
    silver: 1,
    bronze: 0,
    results: [{"year": 1969, "title": "3rd WAUG \u2014 University of Sierra Leone", "outcome": "runner-up", "detail": "2nd to 14th April. 2nd Place: A.B.U. Zaria. 10 Universities took part."}]
  },
  {
    name: "Walter Davis.",
    role: "Head Coach",
    years: [1969, 1970],
    wins: 0,
    silver: 1,
    bronze: 0,
    results: [{"year": 1969, "title": "3rd WAUG \u2014 University of Sierra Leone", "outcome": "runner-up", "detail": "2nd to 14th April. 2nd Place: A.B.U. Zaria. 10 Universities took part."}]
  },
  {
    name: "Adewunmi Aderemi",
    role: "Assistant Coach",
    years: [2003, 2006, 2015],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Agboola Pinheiro.",
    role: "Head Coach",
    years: [1989, 1991, 1995],
    wins: 2,
    silver: 0,
    bronze: 2,
    results: [{"year": 1989, "title": "3rd Africa Clubside Women's Finals \u2014 Kinshasa, Zaire", "outcome": "win", "detail": "3rd to ?? June. 1st Place: Zaire (A.C. Tour Billion). 2nd Place: Ivory Coast (Satde D'Abidjan). 3rd Place: Senegal (Daka"}, {"year": 1991, "title": "All Africa Games Preliminaries (Qualifiers) \u2014 Lagos", "outcome": "participated", "detail": "25th to 30th March. Nigeria 93 vs Cote d'Ivoire 99. Nigeria 60 vs Cote d'Ivoire 62. Coach: Tunde Babalola. Assistant Coa"}, {"year": 1991, "title": "Commonwealth Basketball \u2014 Edinburgh, Scotland", "outcome": "bronze", "detail": "26th June to 7th July. Nigeria Men: 4th Position. Nigeria Women (First Bank): 3rd Position."}, {"year": 1991, "title": "FIBA World Junior Men's Championships \u2014 Edmonton, Canada", "outcome": "participated", "detail": "26th July to August 4th. Nigeria: 15th Position."}, {"year": 1991, "title": "FISU \u2014 Sheffield, England", "outcome": "participated", "detail": "Nigeria \u2014 Position unknown."}, {"year": 1991, "title": "FIBAFRICA Men Clubside Qualifiers", "outcome": "participated", "detail": "Niger Potters lost in first round."}, {"year": 1991, "title": "16th FIBAFRICA Men's Championships \u2014 Cairo, Egypt", "outcome": "participated", "detail": "28th December to 4th January 1992. Nigeria: 5th Place."}, {"year": 1995, "title": "1st NBBF 7Up Premier League Launched", "outcome": "participated", "detail": "8th April. Savannah Conference: 1st: Plateau Peaks. 2nd: Kano Pillars. 3rd: Kaddar Stars. 4th: Niger Potters. 5th: Bauch"}, {"year": 1995, "title": "6th All African Games \u2014 Harare, Zimbabwe", "outcome": "participated", "detail": "Nigeria: 4th Position."}, {"year": 1995, "title": "FIBAFRICA Men Clubside Finals", "outcome": "bronze", "detail": "Comets: 3rd Position."}, {"year": 1995, "title": "18th FIBAFRICA Men's Championship \u2014 Algiers", "outcome": "win", "detail": "11th to 18th December. 1st Place: Angola. 2nd Place: Senegal. 3rd Place: Nigeria. 4th Place: Algeria. 9 Teams Participat"}]
  },
  {
    name: "Alex Nwora",
    role: "Head Coach",
    years: [2018, 2019, 2020],
    wins: 6,
    silver: 1,
    bronze: 3,
    results: [{"year": 2018, "title": "FIBA Men's World Cup Qualification \u2014 2nd Window, Abidjan", "outcome": "win", "detail": "23rd to 25th February. Nigeria: 1st Place in Group Standing."}, {"year": 2018, "title": "FIBA Men 3X3 World Cup \u2014 Philippines", "outcome": "participated", "detail": "June 8th to 12th. 2nd Round. Nigeria: 17th Place."}, {"year": 2018, "title": "FIBA Men's World Cup Qualification \u2014 3rd Window, Lagos", "outcome": "win", "detail": "29th June to 1st July. Nigeria: 1st Place in Group Standing."}, {"year": 2018, "title": "FASU \u2014 Ethiopia", "outcome": "participated", "detail": "29th June to 8th July. B.U.K. (Female): 4th Place."}, {"year": 2018, "title": "FIBA 3X3 Africa Cup \u2014 Benin", "outcome": "runner-up", "detail": "16th and 17th August. Nigeria Women: 2nd Place. Nigeria Men: 2nd Place."}, {"year": 2018, "title": "FIBA World Cup Women \u2014 Tenerife, Spain", "outcome": "participated", "detail": "22nd to 30th September. Nigeria: 8th Position."}, {"year": 2018, "title": "Commonwealth Games (Blackgold) \u2014 Australia", "outcome": "participated", "detail": "Nigeria lost all 4 games to Australia, New Zealand, Canada and Scotland."}, {"year": 2018, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Cotonou", "outcome": "win", "detail": "28th November to 5th December. Rivers Hoopers: 1st Position."}, {"year": 2018, "title": "FIBA 3X3 Africa Cup \u2014 Lome, Togo", "outcome": "bronze", "detail": "1st to 7th November. Nigeria Men: 3rd Position. Nigeria Women: 4th Position."}, {"year": 2019, "title": "FIBA U16 Championship \u2014 Cape Verde", "outcome": "bronze", "detail": "4th to 15th July. Nigeria: 3rd Place. 6 Nations Participated."}, {"year": 2019, "title": "FIBA AfroBasket Men \u2014 Mali (2nd Round)", "outcome": "participated", "detail": "19th to 27th July."}, {"year": 2019, "title": "FIBA AfroBasket Women \u2014 Dakar, Senegal", "outcome": "win", "detail": "10th to 18th August. Nigeria: 1st Place (D'Tigress)."}, {"year": 2019, "title": "D'Tigers Qualify for Tokyo Olympics", "outcome": "win", "detail": "Men's World Cup China, August 31st to September 15th. Nigeria qualified for the Olympic Games Tokyo 2020."}, {"year": 2019, "title": "Women's Olympic Pre-Qualification Tournament \u2014 Maputo, Mozambique", "outcome": "participated", "detail": "14th to 17th November."}, {"year": 2019, "title": "3X3 FIBA Africa Cup \u2014 Uganda", "outcome": "bronze", "detail": "8th to 19th November. Nigeria U16 Girls: Bronze."}, {"year": 2020, "title": "D'Tigress Qualify for Tokyo Olympics", "outcome": "win", "detail": "FIBA Women Olympic Qualifiers, Belgrade, Serbia. Nigeria qualified. Both D'Tigers (men) and D'Tigress (women) headed to "}]
  },
  {
    name: "Brislav Radisic",
    role: "Head Coach",
    years: [1975, 1976, 1977],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1975, "title": "Expanded National Coaching Staff", "outcome": "participated", "detail": "Nigeria deploys multiple zone coaches across four regions alongside Coach OBJ and international coaches Brislav Radisic "}]
  },
  {
    name: "Brislav Radisic.",
    role: "Head Coach",
    years: [1972, 1973, 1974],
    wins: 1,
    silver: 0,
    bronze: 0,
    results: [{"year": 1973, "title": "5th WAUG \u2014 Kumasi, Ghana", "outcome": "win", "detail": "8th to 15th April. Men: 1st Place: U. of Benin (Togo). 2nd Place: U. of Liberia. 3rd Place: A.B.U. Zaria. Women: 1st Pla"}]
  },
  {
    name: "Emmanuel Chagu",
    role: "Assistant Coach",
    years: [1972, 1973, 1974],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Lucic Vladislav",
    role: "Head Coach",
    years: [1976, 1977, 1978],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Nebedum",
    role: "Head Coach",
    years: [1979, 1980, 1981],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1980, "title": "Dr. C.O. Williams Elected AFABA Vice President", "outcome": "participated", "detail": "Dr. C.O. Williams elected Vice President of AFABA and President Africa Zone 3 at meeting in Rabat. Alabi Adelanwa electe"}]
  },
  {
    name: "Richard Mills",
    role: "Head Coach",
    years: [1979, 1980, 1981],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1980, "title": "Dr. C.O. Williams Elected AFABA Vice President", "outcome": "participated", "detail": "Dr. C.O. Williams elected Vice President of AFABA and President Africa Zone 3 at meeting in Rabat. Alabi Adelanwa electe"}]
  },
  {
    name: "Temcov",
    role: "Head Coach",
    years: [1984, 1985, 1987],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Don Burrell",
    role: "Head Coach",
    years: [1975, 1976, 1977, 1978],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1975, "title": "Expanded National Coaching Staff", "outcome": "participated", "detail": "Nigeria deploys multiple zone coaches across four regions alongside Coach OBJ and international coaches Brislav Radisic "}]
  },
  {
    name: "Ganiyu Otenigbagbe",
    role: "Assistant Coach",
    years: [1981, 1987, 1988, 2003],
    wins: 3,
    silver: 0,
    bronze: 0,
    results: [{"year": 2003, "title": "AfroBasket \u2014 Morocco", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2003, "title": "BB4P (Basketball for Peace) Founded", "outcome": "participated", "detail": "Basketball for Peace (BB4P) registered as NGO, implementing partners of USAID in Kaduna. Coach OBJ's organisation to add"}, {"year": 2003, "title": "10th FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "First Bank: 1st Position."}, {"year": 2003, "title": "COJA 8th All Africa Games \u2014 Abuja", "outcome": "win", "detail": "Nigeria Men: Bronze Medal. Nigeria Women: Gold Medal."}, {"year": 2003, "title": "18th FIBAFRICA Women's Nation Cup Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "Nigeria: Gold Medal."}, {"year": 2003, "title": "7th FIBA World Junior Championship Finals \u2014 Thessaloniki, Greece", "outcome": "participated", "detail": "Nigeria: 11th Position."}]
  },
  {
    name: "Peter Ahmedu",
    role: "Head Coach",
    years: [2006, 2008, 2010, 2015],
    wins: 7,
    silver: 0,
    bronze: 3,
    results: [{"year": 2006, "title": "FIBAFRICA Women Clubside Finals \u2014 Gabon", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2006, "title": "Commonwealth Games \u2014 Melbourne, Australia", "outcome": "bronze", "detail": "Nigeria Women: 3rd Position. Nigeria Men: 4th Position. Men lost semi-final game \u2014 all players were home-based."}, {"year": 2006, "title": "World Women Championship \u2014 San Paolo, Brazil", "outcome": "participated", "detail": "Nigeria: 16th Position."}, {"year": 2006, "title": "FIBAFRICA Men Clubside Championship Cup \u2014 Lagos", "outcome": "win", "detail": "17th to 26th November. 1st Place: Athletico, Angola. 2nd Place: Primeiro, Angola. 3rd Place: Dodan Warriors. 4th Place: "}, {"year": 2006, "title": "FIBAFRICA U18 Boys Championship \u2014 South Africa", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2015, "title": "FIBA AfroBasket Women \u2014 Cote d'Ivoire (Zone 3 Qualifier)", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2015, "title": "2015 NBBF/DSTV All Star Event \u2014 Basketball Legends Honored", "outcome": "participated", "detail": "23rd May, Lagos. Honored Legends include Oliver B. Johnson, Godwin Anani, Emmanuel Chagu, Alabi Adelanwa, Maj. Gen. Jose"}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Republic of Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Place. 6 Teams Participated."}, {"year": 2015, "title": "FIBA AfroBasket Finals \u2014 Tunis, Tunisia", "outcome": "win", "detail": "19th to 30th August. 1st Place: Nigeria. 2nd Place: Angola. 3rd Place: Senegal. 4th Place: Tunisia."}, {"year": 2015, "title": "All Africa Games \u2014 Brazzaville (DRC) Congo", "outcome": "participated", "detail": "Men: 1st: Angola. 2nd: Egypt. 3rd: Nigeria. Women: Nigeria won."}, {"year": 2015, "title": "FIBAFRICA Women Clubside Zone 3 Qualifiers \u2014 Cotonou, Republic of Benin", "outcome": "win", "detail": "First Bank Qualified."}, {"year": 2015, "title": "FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "participated", "detail": "First Bank: 4th Position."}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Cotonou, Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Position."}, {"year": 2015, "title": "FIBAFRICA U16 Male \u2014 Republic of Mali", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2015, "title": "FIBA AfroBasket Women \u2014 Yaounde, Cameroun", "outcome": "bronze", "detail": "Nigeria: 3rd Position."}, {"year": 2015, "title": "FIBAFRICA Clubside Finals \u2014 Luanda, Angola", "outcome": "participated", "detail": "10th to 20th December. Kano Pillars: 7th Position."}]
  },
  {
    name: "Scott Nnaji.",
    role: "Head Coach",
    years: [2002, 2005, 2011, 2013],
    wins: 5,
    silver: 1,
    bronze: 2,
    results: [{"year": 2002, "title": "FIBAFRICA 7th World Junior Qualifiers Zone 3 \u2014 Abidjan, Cote d'Ivoire", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2002, "title": "FIBAFRICA 7th World Junior Championship Qualifiers \u2014 Cairo, Egypt", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2005, "title": "10th FIBAFRICA Women Clubside Finals \u2014 Dakar, Senegal", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2005, "title": "FIBAFRICA Women Championship \u2014 Abuja, Nigeria", "outcome": "win", "detail": "1st Place: Nigeria. 2nd Place: Senegal. 3rd Place: Mozambique. 10 Teams Participated."}, {"year": 2005, "title": "FIBA U21 World Championship \u2014 Argentina", "outcome": "participated", "detail": "Nigeria: 10th Position."}, {"year": 2011, "title": "FIBAFRICA Women Clubside Finals \u2014 Nigeria", "outcome": "runner-up", "detail": "First Bank: 2nd Position."}, {"year": 2011, "title": "FIBA AfroBasket Women \u2014 Bamako, Mali", "outcome": "participated", "detail": "Nigeria: 4th Position."}, {"year": 2011, "title": "FIBA AfroBasket Men \u2014 Madagascar", "outcome": "bronze", "detail": "Nigeria won Bronze Medal."}, {"year": 2011, "title": "All African Games \u2014 Maputo, Mozambique", "outcome": "win", "detail": "Nigeria: 1st Position \u2014 Senior Men Gold Medal."}, {"year": 2013, "title": "FIBA AfroBasket \u2014 Abidjan, Cote d'Ivoire", "outcome": "participated", "detail": "Nigeria: 7th Position."}, {"year": 2013, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Republic of Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position."}, {"year": 2013, "title": "FIBA AfroBasket Women \u2014 Maputo, Mozambique (Zone 3 Qualifier)", "outcome": "participated", "detail": "Nigeria: 6th Position."}, {"year": 2013, "title": "FIBAFRICA Men Clubside Finals \u2014 Malabo, Equatorial Guinea", "outcome": "participated", "detail": "Kano Pillars: 5th Position."}]
  },
  {
    name: "Clarence Johnson",
    role: "Head Coach",
    years: [1977, 1978, 1979, 1980, 1981],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1980, "title": "Dr. C.O. Williams Elected AFABA Vice President", "outcome": "participated", "detail": "Dr. C.O. Williams elected Vice President of AFABA and President Africa Zone 3 at meeting in Rabat. Alabi Adelanwa electe"}]
  },
  {
    name: "Masai Ujiri",
    role: "Assistant Coach",
    years: [2002, 2003, 2004, 2005, 2006],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Uche Nebedum",
    role: "Assistant Coach",
    years: [1975, 1976, 1977, 1978, 1980],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Vesselim Temcov",
    role: "Head Coach",
    years: [1979, 1980, 1981, 1982, 1983],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1980, "title": "Dr. C.O. Williams Elected AFABA Vice President", "outcome": "participated", "detail": "Dr. C.O. Williams elected Vice President of AFABA and President Africa Zone 3 at meeting in Rabat. Alabi Adelanwa electe"}]
  },
  {
    name: "Adeka Daudu",
    role: "Head Coach",
    years: [1999, 2002, 2003, 2004, 2005, 2010],
    wins: 1,
    silver: 1,
    bronze: 1,
    results: [{"year": 1999, "title": "AfroBasket \u2014 Angola", "outcome": "runner-up", "detail": "Nigeria: Silver Medal."}, {"year": 1999, "title": "All African Games \u2014 South Africa", "outcome": "bronze", "detail": "Nigeria Men: 3rd Position. Nigeria Women: 3rd Position."}, {"year": 1999, "title": "6th World U19 Men's Championship \u2014 Lisbon, Portugal", "outcome": "win", "detail": "15th to 25th July. 1st Place: Spain. 2nd Place: USA. 3rd Place: Croatia. Nigeria: 13th Place. 16 Teams Participated."}, {"year": 1999, "title": "FISU World University Games \u2014 Palma de Majorca, Spain", "outcome": "participated", "detail": "2nd to 13th July. Nigeria: 11th Position."}]
  },
  {
    name: "Andrew Isokpehi",
    role: "Assistant Coach",
    years: [1997, 1998, 2001, 2002, 2003, 2009, 2011],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: []
  },
  {
    name: "Coach OBJ (Oliver B. Johnson)",
    role: "Head Coach",
    years: [1972, 1973, 1974, 1975, 1976, 1977, 1978],
    wins: 1,
    silver: 0,
    bronze: 0,
    results: [{"year": 1973, "title": "5th WAUG \u2014 Kumasi, Ghana", "outcome": "win", "detail": "8th to 15th April. Men: 1st Place: U. of Benin (Togo). 2nd Place: U. of Liberia. 3rd Place: A.B.U. Zaria. Women: 1st Pla"}, {"year": 1975, "title": "Expanded National Coaching Staff", "outcome": "participated", "detail": "Nigeria deploys multiple zone coaches across four regions alongside Coach OBJ and international coaches Brislav Radisic "}]
  },
  {
    name: "Robinson (Kano)",
    role: "Head Coach",
    years: [1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988],
    wins: 0,
    silver: 0,
    bronze: 0,
    results: [{"year": 1980, "title": "Dr. C.O. Williams Elected AFABA Vice President", "outcome": "participated", "detail": "Dr. C.O. Williams elected Vice President of AFABA and President Africa Zone 3 at meeting in Rabat. Alabi Adelanwa electe"}]
  },
  {
    name: "Scott Nnaji",
    role: "Assistant Coach",
    years: [1995, 1997, 1998, 1999, 2001, 2003, 2004, 2006, 2007, 2009, 2011, 2015],
    wins: 11,
    silver: 1,
    bronze: 4,
    results: [{"year": 1999, "title": "AfroBasket \u2014 Angola", "outcome": "runner-up", "detail": "Nigeria: Silver Medal."}, {"year": 1999, "title": "All African Games \u2014 South Africa", "outcome": "bronze", "detail": "Nigeria Men: 3rd Position. Nigeria Women: 3rd Position."}, {"year": 1999, "title": "6th World U19 Men's Championship \u2014 Lisbon, Portugal", "outcome": "win", "detail": "15th to 25th July. 1st Place: Spain. 2nd Place: USA. 3rd Place: Croatia. Nigeria: 13th Place. 16 Teams Participated."}, {"year": 1999, "title": "FISU World University Games \u2014 Palma de Majorca, Spain", "outcome": "participated", "detail": "2nd to 13th July. Nigeria: 11th Position."}, {"year": 2003, "title": "AfroBasket \u2014 Morocco", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2003, "title": "BB4P (Basketball for Peace) Founded", "outcome": "participated", "detail": "Basketball for Peace (BB4P) registered as NGO, implementing partners of USAID in Kaduna. Coach OBJ's organisation to add"}, {"year": 2003, "title": "10th FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "First Bank: 1st Position."}, {"year": 2003, "title": "COJA 8th All Africa Games \u2014 Abuja", "outcome": "win", "detail": "Nigeria Men: Bronze Medal. Nigeria Women: Gold Medal."}, {"year": 2003, "title": "18th FIBAFRICA Women's Nation Cup Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "Nigeria: Gold Medal."}, {"year": 2003, "title": "7th FIBA World Junior Championship Finals \u2014 Thessaloniki, Greece", "outcome": "participated", "detail": "Nigeria: 11th Position."}, {"year": 2006, "title": "FIBAFRICA Women Clubside Finals \u2014 Gabon", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2006, "title": "Commonwealth Games \u2014 Melbourne, Australia", "outcome": "bronze", "detail": "Nigeria Women: 3rd Position. Nigeria Men: 4th Position. Men lost semi-final game \u2014 all players were home-based."}, {"year": 2006, "title": "World Women Championship \u2014 San Paolo, Brazil", "outcome": "participated", "detail": "Nigeria: 16th Position."}, {"year": 2006, "title": "FIBAFRICA Men Clubside Championship Cup \u2014 Lagos", "outcome": "win", "detail": "17th to 26th November. 1st Place: Athletico, Angola. 2nd Place: Primeiro, Angola. 3rd Place: Dodan Warriors. 4th Place: "}, {"year": 2006, "title": "FIBAFRICA U18 Boys Championship \u2014 South Africa", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2015, "title": "FIBA AfroBasket Women \u2014 Cote d'Ivoire (Zone 3 Qualifier)", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2015, "title": "2015 NBBF/DSTV All Star Event \u2014 Basketball Legends Honored", "outcome": "participated", "detail": "23rd May, Lagos. Honored Legends include Oliver B. Johnson, Godwin Anani, Emmanuel Chagu, Alabi Adelanwa, Maj. Gen. Jose"}, {"year": 2015, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Republic of Benin", "outcome": "win", "detail": "Kano Pillars: 1st Position. Mark Mentors: 2nd Place. 6 Teams Participated."}, {"year": 2015, "title": "FIBA AfroBasket Finals \u2014 Tunis, Tunisia", "outcome": "win", "detail": "19th to 30th August. 1st Place: Nigeria. 2nd Place: Angola. 3rd Place: Senegal. 4th Place: Tunisia."}, {"year": 2015, "title": "All Africa Games \u2014 Brazzaville (DRC) Congo", "outcome": "participated", "detail": "Men: 1st: Angola. 2nd: Egypt. 3rd: Nigeria. Women: Nigeria won."}]
  },
  {
    name: "Ayo Bakare",
    role: "Head Coach",
    years: [1997, 1999, 2001, 2002, 2003, 2005, 2006, 2007, 2008, 2009, 2011, 2012, 2013],
    wins: 19,
    silver: 6,
    bronze: 7,
    results: [{"year": 1997, "title": "FISU \u2014 Sicily, Italy", "outcome": "participated", "detail": "19th to 30th August. Nigeria: 6th Position."}, {"year": 1997, "title": "African Nations Cup \u2014 Dakar, Senegal", "outcome": "runner-up", "detail": "Nigeria: 2nd Position."}, {"year": 1999, "title": "AfroBasket \u2014 Angola", "outcome": "runner-up", "detail": "Nigeria: Silver Medal."}, {"year": 1999, "title": "All African Games \u2014 South Africa", "outcome": "bronze", "detail": "Nigeria Men: 3rd Position. Nigeria Women: 3rd Position."}, {"year": 1999, "title": "6th World U19 Men's Championship \u2014 Lisbon, Portugal", "outcome": "win", "detail": "15th to 25th July. 1st Place: Spain. 2nd Place: USA. 3rd Place: Croatia. Nigeria: 13th Place. 16 Teams Participated."}, {"year": 1999, "title": "FISU World University Games \u2014 Palma de Majorca, Spain", "outcome": "participated", "detail": "2nd to 13th July. Nigeria: 11th Position."}, {"year": 2001, "title": "FISU \u2014 Beijing, China", "outcome": "participated", "detail": "August. Nigeria Men: 16th Position. Nigeria Women: 21st Position."}, {"year": 2001, "title": "FIBA AfroBasket \u2014 Egypt", "outcome": "runner-up", "detail": "Nigeria: 2nd Position."}, {"year": 2001, "title": "African Nations Cup \u2014 Morocco", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2002, "title": "FIBAFRICA 7th World Junior Qualifiers Zone 3 \u2014 Abidjan, Cote d'Ivoire", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2002, "title": "FIBAFRICA 7th World Junior Championship Qualifiers \u2014 Cairo, Egypt", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2003, "title": "AfroBasket \u2014 Morocco", "outcome": "participated", "detail": "Nigeria: 5th Position."}, {"year": 2003, "title": "BB4P (Basketball for Peace) Founded", "outcome": "participated", "detail": "Basketball for Peace (BB4P) registered as NGO, implementing partners of USAID in Kaduna. Coach OBJ's organisation to add"}, {"year": 2003, "title": "10th FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "First Bank: 1st Position."}, {"year": 2003, "title": "COJA 8th All Africa Games \u2014 Abuja", "outcome": "win", "detail": "Nigeria Men: Bronze Medal. Nigeria Women: Gold Medal."}, {"year": 2003, "title": "18th FIBAFRICA Women's Nation Cup Finals \u2014 Maputo, Mozambique", "outcome": "win", "detail": "Nigeria: Gold Medal."}, {"year": 2003, "title": "7th FIBA World Junior Championship Finals \u2014 Thessaloniki, Greece", "outcome": "participated", "detail": "Nigeria: 11th Position."}, {"year": 2005, "title": "10th FIBAFRICA Women Clubside Finals \u2014 Dakar, Senegal", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2005, "title": "FIBAFRICA Women Championship \u2014 Abuja, Nigeria", "outcome": "win", "detail": "1st Place: Nigeria. 2nd Place: Senegal. 3rd Place: Mozambique. 10 Teams Participated."}, {"year": 2005, "title": "FIBA U21 World Championship \u2014 Argentina", "outcome": "participated", "detail": "Nigeria: 10th Position."}]
  },
  {
    name: "Sani Ahmed",
    role: "Assistant Coach",
    years: [1999, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2015],
    wins: 16,
    silver: 3,
    bronze: 7,
    results: [{"year": 2004, "title": "FIBAFRICA Women Clubside Finals \u2014 Senegal", "outcome": "runner-up", "detail": "First Bank: 2nd Position."}, {"year": 2004, "title": "FIBU21 Finals \u2014 Dakar, Senegal", "outcome": "win", "detail": "Nigeria: 1st Position \u2014 Gold Medal."}, {"year": 2004, "title": "Olympic Games \u2014 Athens, Greece (Women)", "outcome": "participated", "detail": "Nigeria: 11th Position."}, {"year": 2005, "title": "10th FIBAFRICA Women Clubside Finals \u2014 Dakar, Senegal", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2005, "title": "FIBAFRICA Women Championship \u2014 Abuja, Nigeria", "outcome": "win", "detail": "1st Place: Nigeria. 2nd Place: Senegal. 3rd Place: Mozambique. 10 Teams Participated."}, {"year": 2005, "title": "FIBA U21 World Championship \u2014 Argentina", "outcome": "participated", "detail": "Nigeria: 10th Position."}, {"year": 2006, "title": "FIBAFRICA Women Clubside Finals \u2014 Gabon", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2006, "title": "Commonwealth Games \u2014 Melbourne, Australia", "outcome": "bronze", "detail": "Nigeria Women: 3rd Position. Nigeria Men: 4th Position. Men lost semi-final game \u2014 all players were home-based."}, {"year": 2006, "title": "World Women Championship \u2014 San Paolo, Brazil", "outcome": "participated", "detail": "Nigeria: 16th Position."}, {"year": 2006, "title": "FIBAFRICA Men Clubside Championship Cup \u2014 Lagos", "outcome": "win", "detail": "17th to 26th November. 1st Place: Athletico, Angola. 2nd Place: Primeiro, Angola. 3rd Place: Dodan Warriors. 4th Place: "}, {"year": 2006, "title": "FIBAFRICA U18 Boys Championship \u2014 South Africa", "outcome": "win", "detail": "Nigeria: 1st Position."}, {"year": 2007, "title": "All African Games \u2014 Algiers, Algeria", "outcome": "runner-up", "detail": "Nigeria Men: Bronze Medal. Nigeria Women: Silver Medal."}, {"year": 2007, "title": "FIBAFRICA Women Clubside Finals \u2014 Maputo, Mozambique", "outcome": "participated", "detail": "First Bank: 7th Position."}, {"year": 2008, "title": "FIBAFRICA U16 Junior Boys Finals \u2014 Maputo, Mozambique", "outcome": "bronze", "detail": "Nigeria: 3rd Position."}, {"year": 2008, "title": "FIBAFRICA Women Clubside Qualifiers Zone 3 \u2014 Cote d'Ivoire", "outcome": "win", "detail": "First Bank Qualified. Customs: 4th Position."}, {"year": 2008, "title": "FIBAFRICA Men Clubside Qualifiers Zone 3 \u2014 Lagos", "outcome": "win", "detail": "Kano Pillars: 1st Position."}, {"year": 2008, "title": "FIBAFRICA Women Clubside Finals \u2014 Kenya", "outcome": "bronze", "detail": "First Bank: 3rd Position."}, {"year": 2008, "title": "FIBAFRICA U16 Male/Female Junior \u2014 Cotonou, Republic of Benin", "outcome": "win", "detail": "Nigeria Male: 3rd Position. Nigeria Female: 1st Position."}, {"year": 2008, "title": "FIBAFRICA Men Clubside Finals \u2014 Tunisia", "outcome": "participated", "detail": "Kano Pillars: 5th Position."}, {"year": 2008, "title": "FIBAFRICA U18 Male \u2014 Alexandria, Egypt", "outcome": "win", "detail": "18th to 26th October. 1st Place: Egypt. 2nd Place: Angola. 3rd Place: Nigeria. 12 Teams Participated."}]
  },
];

let page = "home";
let state = { decade: "all", search: "" };
let hasAccess = false;

function checkAccess() {
  try {
    hasAccess = sessionStorage.getItem("nba_access") === "granted";
  } catch(e) {
    hasAccess = false;
  }
}
function grantAccess() {
  try { sessionStorage.setItem("nba_access", "granted"); } catch(e) {}
  hasAccess = true;
}
checkAccess();

// Browser history support
function pushHistory(p, s) {
  const params = new URLSearchParams();
  params.set("page", p);
  if (s.decade && s.decade !== "all") params.set("decade", s.decade);
  if (s.search) params.set("search", s.search);
  history.pushState({ page: p, state: s }, "", "?" + params.toString());
}

window.addEventListener("popstate", (e) => {
  if (e.state) {
    page = e.state.page;
    state = { decade: "all", search: "", ...e.state.state };
  } else {
    page = "home";
    state = { decade: "all", search: "" };
  }
  render();
  window.scrollTo(0, 0);
});

function totalEvents() {
  return records.reduce((s, yr) => s + yr.events.length, 0);
}
function decadeCount(val) {
  return records.filter(yr => yr.decade === val).length;
}
const protectedPages = ["records", "analysis", "constitution", "about"];

function navigate(p, s = {}) {
  if (protectedPages.includes(p) && !hasAccess) {
    page = "signup";
    pushHistory("signup", {});
    window.scrollTo(0, 0);
    render();
    return;
  }
  page = p;
  if (s.decade !== undefined) state.decade = s.decade;
  if (s.search !== undefined) state.search = s.search;
  else state.search = "";
  pushHistory(p, { decade: state.decade, search: state.search });
  window.scrollTo(0, 0);
  render();
}
function getVisible() {
  return records.filter(yr => {
    const decOk = state.decade === "all" || yr.decade === Number(state.decade);
    const q = state.search.toLowerCase();
    if (!q) return decOk;
    const txt = (yr.administration.board + yr.administration.coaches + yr.administration.notes + yr.events.map(e => e.title + e.detail).join(" ")).toLowerCase();
    return decOk && (txt.includes(q) || String(yr.year).includes(q));
  });
}

function nav() {
  return `<nav class="nav">
    <div class="nav__inner">
      <button class="nav__brand" data-nav="home">Nigeria Basketball Archive</button>
      <div class="nav__links">
        <button class="nav__link ${page==="home"?"active":""}" data-nav="home">Home</button>
        <button class="nav__link ${page==="records"?"active":""}" data-nav="records">Records</button>
        <button class="nav__link ${page==="analysis"?"active":""}" data-nav="analysis">Analysis</button>
        <button class="nav__link ${page==="constitution"?"active":""}" data-nav="constitution">Constitution</button>
        <button class="nav__link ${page==="about"?"active":""}" data-nav="about">About</button>
        <button class="nav__link ${page==="players"?"active":""}" data-nav="players">Players</button>
        <button class="nav__link ${page==="coaches"?"active":""}" data-nav="coaches">Coaches</button>
        <button class="nav__link ${page==="contribute"?"active":""}" data-nav="contribute">Contribute</button>
        <button class="nav__link nav__link--cta ${page==="signup"?"active":""}" data-nav="signup">Request Access</button>
      </div>
    </div>
  </nav>`;
}

function footer() {
  return `<footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">Nigeria Basketball Archive</div>
      <div class="footer__text">Compiled by <strong><a href="https://www.bb4p.org" target="_blank" class="credit-link">Coach OBJ</a></strong> — <a href="https://www.bb4p.org" target="_blank" class="credit-link">Oliver B. Johnson</a> · 1964–2020 · NBBF</div>
      <div class="footer__credit">Edited &amp; Built by <strong><a href="https://workwithsadiasfactory.netlify.app" target="_blank" class="credit-link">Halima Abdul</a></strong></div>
    </div>
  </footer>`;
}

function crumb(label) {
  return `<div class="rp-crumb">
    <button class="rp-crumb__link" data-nav="home">Home</button>
    <span class="rp-crumb__sep">›</span>
    <span class="rp-crumb__current">${label}</span>
  </div>`;
}

// ── HOME ──────────────────────────────────────────────────
function homePage() {
  const decadeList = [
    {v:1960,l:"1960s"},{v:1970,l:"1970s"},{v:1980,l:"1980s"},{v:1990,l:"1990s"},
    {v:2000,l:"2000s"},{v:2010,l:"2010s"},{v:2020,l:"2020s"}
  ];
  return `
  ${nav()}
  <div class="hero">
    <div class="hero__inner">
      <div class="hero__left">
        <p class="hero__label">NBBF — Nigeria Basketball Federation · Est. 1964</p>
        <h1 class="hero__title">56 Years of Nigerian Basketball, <em>Documented.</em></h1>
        <p class="hero__desc">The complete record of every chairman, coach, tournament, and international competition in Nigerian basketball history — from the founding of NABBA in 1964 to 2020.</p>
        <div class="hero__search">
          <input class="hero__search-input" id="heroSearch" type="search" placeholder="Search a year, name, team or event…" autocomplete="off"/>
          <button class="hero__search-btn" id="heroSearchBtn">Search</button>
        </div>

      </div>
      <div class="hero__right">
        <p class="hero__stats-title">Nigeria Basketball Federation (NBBF)</p>
        <div class="hero__stat"><div class="hero__stat-num">56</div><div class="hero__stat-label">Years Covered</div></div>
        <div class="hero__stat"><div class="hero__stat-num">${records.length}</div><div class="hero__stat-label">Year Records</div></div>
        <div class="hero__stat"><div class="hero__stat-num">${totalEvents()}</div><div class="hero__stat-label">Events Recorded</div></div>
        <div class="hero__stat"><div class="hero__stat-num">NBBF</div><div class="hero__stat-label">Federation</div></div>
      </div>
    </div>
  </div>

  <div class="home-body">
    <div class="section-rule">
      <span class="section-rule__title">Browse by Era</span>
      <div class="section-rule__line"></div>
      <button class="section-rule__link" data-nav="records">View all records →</button>
    </div>
    <div class="decade-grid">
      ${decadeList.map(d => `
        <button class="decade-tile" data-decade="${d.v}">
          <span class="decade-tile__year">${d.l}</span>
          <span class="decade-tile__count">${decadeCount(d.v)} years</span>
        </button>`).join("")}
    </div>

    <div class="section-rule">
      <span class="section-rule__title">The Archive in Numbers</span>
      <div class="section-rule__line"></div>
    </div>
    <div class="stats-grid">
      <div class="stats-card stats-card--large">
        <div class="stats-card__num">56</div>
        <div class="stats-card__label">Years Documented</div>
        <div class="stats-card__sub">1964 — 2020</div>
      </div>
      <div class="stats-card">
        <div class="stats-card__num">${records.length}</div>
        <div class="stats-card__label">Year Records</div>
        <div class="stats-card__sub">Complete annual entries</div>
      </div>
      <div class="stats-card">
        <div class="stats-card__num">${totalEvents()}</div>
        <div class="stats-card__label">Events Recorded</div>
        <div class="stats-card__sub">Tournaments, milestones & more</div>
      </div>
      <div class="stats-card">
        <div class="stats-card__num">${records.filter(r => r.events && r.events.some(e => e.category === "intl")).length}</div>
        <div class="stats-card__label">Years of International Play</div>
        <div class="stats-card__sub">AfroBasket, Olympics, FIBA</div>
      </div>
      <div class="stats-card">
        <div class="stats-card__num">${records.filter(r => r.events && r.events.some(e => e.category === "tournament")).length}</div>
        <div class="stats-card__label">Years with Tournaments</div>
        <div class="stats-card__sub">National & state competitions</div>
      </div>
      <div class="stats-card stats-card--green">
        <div class="stats-card__num">18</div>
        <div class="stats-card__label">NBBF Constitution Articles</div>
        <div class="stats-card__sub">Governing the federation</div>
      </div>
    </div>

    <div class="section-rule">
      <span class="section-rule__title">Browse by Category</span>
      <div class="section-rule__line"></div>
    </div>
    <div class="feature-strip">
      <div class="feature-item" data-nav="records">
        <div class="feature-item__icon feature-item__icon--green">👤</div>
        <div class="feature-item__title">NBBF Leadership</div>
        <div class="feature-item__desc">Every chairman, president, secretary and board member, year by year from 1964.</div>
        <div class="feature-item__count">56 years of boards →</div>
      </div>
      <div class="feature-item" data-nav="records">
        <div class="feature-item__icon feature-item__icon--orange">🏆</div>
        <div class="feature-item__title">Tournaments</div>
        <div class="feature-item__desc">National League, Sports Festival, Premier League, Cup competitions and more.</div>
        <div class="feature-item__count">Explore tournaments →</div>
      </div>
      <div class="feature-item" data-nav="records">
        <div class="feature-item__icon feature-item__icon--blue">🌍</div>
        <div class="feature-item__title">International</div>
        <div class="feature-item__desc">AfroBasket, Olympics, Commonwealth Games, FIBA — Nigeria on the world stage.</div>
        <div class="feature-item__count">Explore international →</div>
      </div>
      <div class="feature-item" data-nav="analysis">
        <div class="feature-item__icon feature-item__icon--red">📋</div>
        <div class="feature-item__title">Analysis & Notes</div>
        <div class="feature-item__desc">Editorial notes on governance, coaching tenure, and the underlying issues in Nigerian basketball.</div>
        <div class="feature-item__count">Read analysis →</div>
      </div>
    </div>

    <div class="section-rule">
      <span class="section-rule__title">More from the Archive</span>
      <div class="section-rule__line"></div>
    </div>
    <div class="feature-strip">
      <div class="feature-item" data-nav="analysis">
        <div class="feature-item__icon feature-item__icon--orange">📝</div>
        <div class="feature-item__title">The Underlying Issues</div>
        <div class="feature-item__desc">A frank account of the politics that shaped the NBBF — from U.K. Umar through Tijjani Umar to Musa Kida.</div>
        <div class="feature-item__count">Read the full account →</div>
      </div>
      <div class="feature-item" data-nav="constitution">
        <div class="feature-item__icon feature-item__icon--green">⚖️</div>
        <div class="feature-item__title">NBBF Constitution</div>
        <div class="feature-item__desc">The full constitution of the Nigeria Basketball Federation — all 18 articles.</div>
        <div class="feature-item__count">Read the constitution →</div>
      </div>
      <div class="feature-item" data-nav="about">
        <div class="feature-item__icon feature-item__icon--blue">ℹ️</div>
        <div class="feature-item__title">About This Archive</div>
        <div class="feature-item__desc">Compiled by Coach OBJ — Oliver B. Johnson — Nigeria's National Basketball Coach from 1971.</div>
        <div class="feature-item__count">Read about the archive →</div>
      </div>
      <div class="feature-item" data-nav="records">
        <div class="feature-item__icon feature-item__icon--red">📅</div>
        <div class="feature-item__title">Milestones</div>
        <div class="feature-item__desc">Historic firsts, landmark moments and the defining achievements of Nigerian basketball.</div>
        <div class="feature-item__count">Explore milestones →</div>
      </div>
    </div>

    <div class="section-rule">
      <span class="section-rule__title">Contribute to the Archive</span>
      <div class="section-rule__line"></div>
    </div>
    <div class="contribute-section">
      <div class="contribute-section__left">
        <p class="contribute-section__intro">This archive is a living document. If you were part of Nigerian basketball — as a player, coach, official, journalist or fan — your records, photographs and stories belong here. Every contribution is reviewed, verified and credited by name.</p>
        <div class="contribute-ways">
          <div class="contribute-way">
            <div class="contribute-way__icon">📄</div>
            <div>
              <div class="contribute-way__title">Missing Records</div>
              <div class="contribute-way__desc">Fill gaps in years with incomplete data — board members, coaches, tournament results.</div>
            </div>
          </div>
          <div class="contribute-way">
            <div class="contribute-way__icon">✏️</div>
            <div>
              <div class="contribute-way__title">Corrections</div>
              <div class="contribute-way__desc">Flag errors in existing records and provide the correct information with a source.</div>
            </div>
          </div>
          <div class="contribute-way">
            <div class="contribute-way__icon">📷</div>
            <div>
              <div class="contribute-way__title">Photos & Documents</div>
              <div class="contribute-way__desc">Newspaper clippings, match photographs, official documents and programmes.</div>
            </div>
          </div>
          <div class="contribute-way">
            <div class="contribute-way__icon">🎙️</div>
            <div>
              <div class="contribute-way__title">Personal Testimony</div>
              <div class="contribute-way__desc">Your own story in Nigerian basketball — first-hand accounts from those who were there.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="contribute-section__right">
        <div class="contribute-cta-card">
          <h3 class="contribute-cta-card__title">What We Need Most</h3>
          <ul class="contribute-cta-card__list">
            <li>Records from the early years — 1964 to 1979</li>
            <li>State-level tournament results</li>
            <li>Newspaper clippings and match photos</li>
            <li>First-hand accounts from players and coaches</li>
            <li>Photos of NBBF board meetings and ceremonies</li>
          </ul>
          <button class="contribute-cta-card__btn" data-nav="contribute">Submit a Contribution</button>
          <p class="contribute-cta-card__note">All contributors are credited by name in the archive.</p>
        </div>
      </div>
    </div>

    <div class="about-strip">
      <div>
        <div class="about-strip__title">Compiled by Coach OBJ</div>
        <div class="about-strip__text">This archive was compiled by <a href="https://www.bb4p.org" target="_blank" class="credit-link credit-link--light">Oliver B. Johnson — Coach OBJ</a> — Nigeria's National Basketball Coach from 1971. It documents the full 56-year history of the game in Nigeria, from the founding of NABBA to 2020. Edited and built by Halima Abdul.</div>
      </div>
      <button class="about-strip__btn" data-nav="about">Read More</button>
    </div>
  </div>
  ${footer()}`;
}

// ── RECORDS ───────────────────────────────────────────────
function badge(cat) {
  return `<span class="badge badge--${cat}">${categoryLabels[cat]||cat}</span>`;
}

function formatBoardText(text) {
  if (!text) return "";
  // Split on patterns like "Label: value." or "Label: value then value."
  // Matches things like "President:", "Zonal Representatives:", etc.
  const lines = text.split(/(?=[A-Z][A-Za-z\s\/\-&()]+:\s)/);
  const items = lines.map(line => line.trim()).filter(Boolean);
  if (items.length <= 1) {
    return `<p class="yb__field-value">${text}</p>`;
  }
  return `<ul class="board-list">${items.map(item => {
    const colonIdx = item.indexOf(":");
    if (colonIdx === -1) return `<li class="board-list__item"><span class="board-list__val">${item}</span></li>`;
    const label = item.slice(0, colonIdx).trim();
    const val = item.slice(colonIdx + 1).trim().replace(/\.\s*$/, "");
    return `<li class="board-list__item"><span class="board-list__label">${label}:</span> <span class="board-list__val">${val}</span></li>`;
  }).join("")}</ul>`;
}

function yearBlock(yr) {
  const hasEv = yr.events && yr.events.length > 0;
  const hasNotes = yr.administration.notes && yr.administration.notes.trim();
  return `
  <div class="yb">
    <div class="yb__head">
      <div class="yb__left">
        <span class="yb__year">${yr.year}</span>
        <div class="yb__tags">
          ${yr.administration.board ? '<span class="yb__tag yb__tag--admin">Administration</span>' : ""}
          ${hasEv ? `<span class="yb__tag yb__tag--events">${yr.events.length} event${yr.events.length>1?"s":""}</span>` : ""}
        </div>
      </div>
      <div class="yb__actions">
        <button class="yb__action-btn yb__share-btn" data-year="${yr.year}" title="Share ${yr.year}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        </button>
        <button class="yb__action-btn yb__print-btn" data-year="${yr.year}" title="Export ${yr.year}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        </button>
        <button class="yb__btn">
          <svg class="yb__chevron" width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="yb__body">
      <div class="yb__section">
        <div class="yb__section-label">Administration</div>
        ${yr.administration.board ? `<div class="yb__field"><span class="yb__field-label">Board &amp; Leadership</span>${formatBoardText(yr.administration.board)}</div>` : ""}
        ${yr.administration.coaches ? `<div class="yb__field"><span class="yb__field-label">Coaches &amp; Staff</span>${formatBoardText(yr.administration.coaches)}</div>` : ""}
        ${hasNotes ? `<div class="yb__field"><span class="yb__field-label">Notes</span><p class="yb__field-value">${yr.administration.notes}</p></div>` : ""}
      </div>
      ${hasEv ? `
      <div class="yb__section yb__section--events">
        <div class="yb__section-label">Events &amp; Competitions</div>
        <div class="yb__events">
          ${yr.events.map(e => `
            <div class="yb__event">
              <div class="yb__event-top">${badge(e.category)}<span class="yb__event-title">${e.title}</span></div>
              <p class="yb__event-detail">${e.detail}</p>
              ${e.source ? `<p class="yb__event-source">Source: ${e.source}</p>` : ""}
            </div>`).join("")}
        </div>
      </div>` : ""}
    </div>
  </div>`;
}

function recordsPage() {
  const visible = getVisible();
  const sorted = [...visible].sort((a,b) => b.year - a.year);
  const label = decades.find(d => String(d.value) === String(state.decade))?.label || "All Records";
  return `
  ${nav()}
  <div class="rp-header">
    <div class="rp-header__inner">
      ${crumb("Records")}
      <h1 class="rp-header__title">${state.decade !== "all" ? label : "All Records"}</h1>
    </div>
  </div>
  <div class="rp-controls">
    <div class="rp-controls__inner">
      <input class="rp-search" id="rpSearch" type="search" placeholder="Search by year, name, team or event…" value="${state.search}" autocomplete="off"/>
      <div class="rp-filters">
        ${decades.map(d => `<button class="rp-pill ${state.decade===String(d.value)?"active":""}" data-decade="${d.value}">${d.label}</button>`).join("")}
      </div>
    </div>
  </div>
  <div class="rp-main">
    <p class="rp-count" id="rpCount">Showing <strong>${visible.length}</strong> of <strong>${records.length}</strong> years — click any row to expand</p>
    <div id="ybContainer">
      ${sorted.length === 0 ? '<div class="empty-state">No records match your search.</div>' : sorted.map(yearBlock).join("")}
    </div>
  </div>
  ${footer()}`;
}

// ── ANALYSIS ─────────────────────────────────────────────
function analysisPage() {
  return `
  ${nav()}
  <div class="rp-header">
    <div class="rp-header__inner">
      ${crumb("Analysis & Notes")}
      <h1 class="rp-header__title">Analysis &amp; Editorial Notes</h1>
    </div>
  </div>
  <div class="long-form">

    <div class="lf-note">
      <h2 class="lf-note__title">${editorialNotes.governanceNote.title}</h2>
      <div class="lf-note__body">${editorialNotes.governanceNote.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}</div>
    </div>

    <div class="lf-note">
      <h2 class="lf-note__title">${editorialNotes.coachesNote.title}</h2>
      <div class="lf-note__body"><p>${editorialNotes.coachesNote.content}</p></div>
    </div>

    <div class="lf-note">
      <h2 class="lf-note__title">${editorialNotes.internationalOrgs.title}</h2>
      <ul class="lf-list">
        ${editorialNotes.internationalOrgs.items.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>

    <div class="lf-divider"></div>

    <div class="lf-essay">
      <h2 class="lf-essay__title">${underlyingIssues.title}</h2>
      ${underlyingIssues.sections.map(s => `
        <div class="lf-essay__section">
          <h3 class="lf-essay__heading">${s.heading}</h3>
          ${s.text.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>`).join('')}
    </div>

  </div>
  ${footer()}`;
}

// ── CONSTITUTION ─────────────────────────────────────────
function constitutionPage() {
  return `
  ${nav()}
  <div class="rp-header">
    <div class="rp-header__inner">
      ${crumb("Constitution")}
      <h1 class="rp-header__title">NBBF Constitution</h1>
    </div>
  </div>
  <div class="long-form">
    <div class="lf-note">
      <h2 class="lf-note__title">Preamble</h2>
      <div class="lf-note__body"><p>${nbbfConstitution.preamble}</p></div>
    </div>
    ${nbbfConstitution.articles.map(a => `
      <div class="lf-article">
        <div class="lf-article__num">${a.number}</div>
        <div class="lf-article__body">
          <h3 class="lf-article__title">${a.title}</h3>
          ${a.content.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')}
        </div>
      </div>`).join('')}
  </div>
  ${footer()}`;
}

// ── ABOUT ────────────────────────────────────────────────
function aboutPage() {
  return `
  ${nav()}
  <div class="about-page">
    <div class="about-crumb">
      <button class="about-crumb__link" data-nav="home">Home</button>
      <span class="about-crumb__sep">›</span>
      <span style="font-size:12px;color:var(--ink-light)">About</span>
    </div>
    <h1 class="about-page__title">About This Archive</h1>
    <p>This archive was compiled by <strong><a href="https://www.bb4p.org" target="_blank" class="credit-link">Coach OBJ</a></strong> — <a href="https://www.bb4p.org" target="_blank" class="credit-link">Oliver B. Johnson</a> — who served as Nigeria's National Basketball Coach from 1971, making him one of the longest-serving and most influential figures in Nigerian basketball history.</p>
    <p>It is an upgrade of his original book, <em>"25 Years of Basketball in Nigeria 1964–1989"</em>, extended to cover the full period 1964 to 2020.</p>
    <h2>What the Archive Contains</h2>
    <p>For every year from 1964 to 2020:</p>
    <ul>
      <li>Complete NBBF/NABBA board — every chairman, president, secretary and member</li>
      <li>National coaching staff and technical personnel</li>
      <li>Domestic tournament results — National League, Sports Festival, Cup competitions</li>
      <li>International results — AfroBasket, Olympics, Commonwealth Games, FIBA events</li>
      <li>Youth and university competitions — NUGA, NICEGA, Nestlé-Milo Schools Championship</li>
      <li>Historic milestones and landmark moments</li>
    </ul>
    <h2>Analysis & Commentary</h2>
    <p>The archive also includes editorial notes on how NABBA/NBBF leadership was constituted from 1964 to the present, a frank account of the underlying political issues that shaped the federation over the decades, and the full NBBF Constitution.</p>
    <h2>The Federation</h2>
    <p>The Nigeria Basketball Federation (NBBF), originally the Nigeria Amateur Basketball Association (NABBA), was founded in 1964. It governs basketball at all levels in Nigeria and is affiliated to FIBA and Africa Zone 3.</p>
    <h2>Digital Archive</h2>
    <p>This digital version was edited and built by <strong><a href="https://workwithsadiasfactory.netlify.app" target="_blank" class="credit-link">Halima Abdul</a></strong>, making 56 years of Nigerian basketball history publicly accessible.</p>
    <button class="about-page__btn" data-nav="records">Explore the Records</button>
  </div>
  ${footer()}`;
}

// ── LANDING (no access) ──────────────────────────────────
function landingPage() {
  return `
  <div class="landing">
    <div class="landing__hero">
      <div class="landing__hero-inner">
        <p class="landing__eyebrow">NBBF — Nigeria Basketball Federation · Est. 1964</p>
        <h1 class="landing__title">Nigeria Basketball Archive</h1>
        <p class="landing__subtitle">56 Years of Records. <em>Documented.</em></p>
        <p class="landing__desc">The complete record of every chairman, coach, tournament result, and international competition in Nigerian basketball history — from the founding of NABBA in 1964 to 2020. Compiled by <a href="https://www.bb4p.org" target="_blank" class="credit-link credit-link--light">Coach OBJ — Oliver B. Johnson</a>.</p>
        <div class="landing__cta-group">
          <button class="landing__cta" id="landingCta">Request Access</button>
          <button class="landing__cta landing__cta--outline" id="landingContribute">Contribute to the Archive</button>
        </div>
        <div class="landing__search-wrap">
          <div class="hero__search" style="max-width:460px;">
            <input class="hero__search-input" id="heroSearch" type="search" placeholder="Search a year, name, coach or event…" autocomplete="off"/>
            <button class="hero__search-btn" id="heroSearchBtn">Search</button>
          </div>
          <div class="search-preview" id="searchPreview" style="display:none">
            <div class="search-preview__results" id="searchPreviewResults"></div>
            <div class="search-preview__lock">
              <div class="search-preview__lock-icon">🔒</div>
              <div class="search-preview__lock-text">Sign up to read full results</div>
              <button class="search-preview__lock-btn" id="searchPreviewCta">Request Access</button>
            </div>
          </div>
        </div>
        <p class="landing__credit">Edited &amp; Built by <strong><a href="https://workwithsadiasfactory.netlify.app" target="_blank" class="credit-link">Halima Abdul</a></strong></p>
      </div>
      <div class="landing__stats">
        <div class="landing__stat"><span class="landing__stat-num">56</span><span class="landing__stat-label">Years Documented</span></div>
        <div class="landing__stat"><span class="landing__stat-num">57</span><span class="landing__stat-label">Year Records</span></div>
        <div class="landing__stat"><span class="landing__stat-num">340+</span><span class="landing__stat-label">Events Recorded</span></div>
        <div class="landing__stat"><span class="landing__stat-num">1964</span><span class="landing__stat-label">Founded</span></div>
      </div>
    </div>
    <div class="landing__milestones">
      <div class="landing__milestones-inner">
        <h2 class="landing__timeline-title">Key Moments from the Archive</h2>
        <p class="landing__timeline-sub">56 years of Nigerian basketball history</p>
        <div class="milestones-grid">
          <div class="milestone-card">
            <div class="milestone-card__year">1964</div>
            <div class="milestone-card__event">Nigeria Basketball Founded</div>
            <div class="milestone-card__detail">Mr. Abraham Ordia appoints Moses Omiumu Imana as the first National Chairman of Nigeria Basketball.</div>
          </div>
          <div class="milestone-card">
            <div class="milestone-card__year">1965</div>
            <div class="milestone-card__event">NABBA Officially Inaugurated</div>
            <div class="milestone-card__detail">The Nigeria Amateur Basketball Association is formally established in Lagos, September 8th.</div>
          </div>
          <div class="milestone-card milestone-card--highlight">
            <div class="milestone-card__year">1971</div>
            <div class="milestone-card__event">Coach OBJ Appointed National Coach</div>
            <div class="milestone-card__detail">Oliver B. Johnson begins his legendary career as Nigeria's National Basketball Coach.</div>
          </div>
          <div class="milestone-card milestone-card--highlight">
            <div class="milestone-card__year">1990</div>
            <div class="milestone-card__event">African Junior Champions</div>
            <div class="milestone-card__detail">Nigeria wins the African Junior Championship in Luanda, Angola — the nation's first continental junior title.</div>
          </div>
          <div class="milestone-card">
            <div class="milestone-card__year">1995</div>
            <div class="milestone-card__event">1st NBBF Premier League</div>
            <div class="milestone-card__detail">The inaugural 7-Up Premier League launches — a landmark moment for domestic basketball in Nigeria.</div>
          </div>
          <div class="milestone-card milestone-card--highlight">
            <div class="milestone-card__year">2012</div>
            <div class="milestone-card__event">First Olympic Qualification</div>
            <div class="milestone-card__detail">Nigeria's men qualify for the Olympic Games for the first time, competing at London 2012.</div>
          </div>
          <div class="milestone-card milestone-card--highlight">
            <div class="milestone-card__year">2017</div>
            <div class="milestone-card__event">D'Tigress Win AfroBasket</div>
            <div class="milestone-card__detail">Nigeria's women win the AfroBasket Championship in Mali — a defining moment for D'Tigress.</div>
          </div>
          <div class="milestone-card milestone-card--highlight">
            <div class="milestone-card__year">2019</div>
            <div class="milestone-card__event">D'Tigers Qualify for Tokyo</div>
            <div class="milestone-card__detail">Nigeria's men qualify for the Tokyo 2020 Olympics at the FIBA World Cup in China.</div>
          </div>
          <div class="milestone-card milestone-card--highlight">
            <div class="milestone-card__year">2020</div>
            <div class="milestone-card__event">D'Tigress Qualify for Tokyo</div>
            <div class="milestone-card__detail">Nigeria's women qualify for the Tokyo 2020 Olympics in Belgrade — both teams headed to the Games.</div>
          </div>
        </div>
        <div class="milestones-cta">
          <p>The full archive contains every year from 1964 to 2020 — every board, every coach, every result.</p>
          <button class="landing__cta" id="timelineCta">Request Access to the Full Archive</button>
        </div>
      </div>
    </div>

    <div class="landing__teaser">
      <div class="landing__teaser-inner">
        <h2 class="landing__teaser-title">What the Archive Contains</h2>
        <div class="landing__teaser-grid">
          <div class="landing__teaser-item">
            <div class="landing__teaser-icon">👤</div>
            <div class="landing__teaser-label">NBBF Leadership</div>
            <div class="landing__teaser-desc">Every chairman, president, secretary and board member — year by year from 1964.</div>
          </div>
          <div class="landing__teaser-item">
            <div class="landing__teaser-icon">🏆</div>
            <div class="landing__teaser-label">Tournaments</div>
            <div class="landing__teaser-desc">National League, Sports Festival, Premier League and all Cup competitions.</div>
          </div>
          <div class="landing__teaser-item">
            <div class="landing__teaser-icon">🌍</div>
            <div class="landing__teaser-label">International</div>
            <div class="landing__teaser-desc">AfroBasket, Olympics, Commonwealth Games and all FIBA events.</div>
          </div>
          <div class="landing__teaser-item">
            <div class="landing__teaser-icon">📋</div>
            <div class="landing__teaser-label">Analysis</div>
            <div class="landing__teaser-desc">Editorial notes and a frank account of the politics that shaped Nigerian basketball.</div>
          </div>
        </div>
        <div class="landing__teaser-cta">
          <p>Access is free. Submit your details to get in.</p>
          <button class="landing__cta landing__cta--dark" id="landingCta2">Request Access Now</button>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">Nigeria Basketball Archive</div>
        <div class="footer__text">Compiled by <strong><a href="https://www.bb4p.org" target="_blank" class="credit-link">Coach OBJ</a></strong> — <a href="https://www.bb4p.org" target="_blank" class="credit-link">Oliver B. Johnson</a> · 1964–2020 · NBBF</div>
        <div class="footer__credit">Edited &amp; Built by <strong><a href="https://workwithsadiasfactory.netlify.app" target="_blank" class="credit-link">Halima Abdul</a></strong></div>
      </div>
    </footer>
  </div>`;
}

// ── SIGNUP ───────────────────────────────────────────────
const FORM_URL = "https://script.google.com/macros/s/AKfycbzoFdbSCNcPhGTOwz8m8OznCFpbgEWLjef2GnkfWpJ8I4tZPsrewjFNpHTGFeFClbgf/exec";
const CONTRIB_URL = "https://script.google.com/macros/s/AKfycbzoFdbSCNcPhGTOwz8m8OznCFpbgEWLjef2GnkfWpJ8I4tZPsrewjFNpHTGFeFClbgf/exec";

function signupPage() {
  return `
  ${nav()}
  <div class="signup-page">
    <div class="signup-page__inner">
      ${crumb("Request Access")}
      <h1 class="signup-page__title">Request Access to the Archive</h1>
      <p class="signup-page__sub">The Nigeria Basketball Archive contains 56 years of records documenting every chairman, coach, tournament and international competition of the NBBF. Complete the form below to request full access.</p>

      <div class="signup-form-wrap">
        <form class="signup-form" id="signupForm" novalidate>
          <div class="sf-group">
            <label class="sf-label" for="sf-name">Full Name <span class="sf-required">*</span></label>
            <input class="sf-input" id="sf-name" type="text" placeholder="e.g. Emeka Okafor" autocomplete="name" required/>
            <span class="sf-error" id="err-name">Please enter your full name.</span>
          </div>
          <div class="sf-group">
            <label class="sf-label" for="sf-email">Email Address <span class="sf-required">*</span></label>
            <input class="sf-input" id="sf-email" type="email" placeholder="e.g. emeka@example.com" autocomplete="email" required/>
            <span class="sf-error" id="err-email">Please enter a valid email address.</span>
          </div>
          <div class="sf-group">
            <label class="sf-label" for="sf-org">Organisation / Club <span class="sf-required">*</span></label>
            <input class="sf-input" id="sf-org" type="text" placeholder="e.g. Kano Pillars, NBBF, University of Lagos" required/>
            <span class="sf-error" id="err-org">Please enter your organisation or club.</span>
          </div>
          <div class="sf-group">
            <label class="sf-label" for="sf-role">Role in Basketball <span class="sf-required">*</span></label>
            <select class="sf-input sf-select" id="sf-role" required>
              <option value="">— Select your role —</option>
              <option value="Player">Player</option>
              <option value="Coach">Coach</option>
              <option value="Referee / Official">Referee / Official</option>
              <option value="Administrator / Federation Official">Administrator / Federation Official</option>
              <option value="Journalist / Media">Journalist / Media</option>
              <option value="Researcher / Academic">Researcher / Academic</option>
              <option value="Fan / Supporter">Fan / Supporter</option>
              <option value="Other">Other</option>
            </select>
            <span class="sf-error" id="err-role">Please select your role.</span>
          </div>

          <div class="sf-submit-row">
            <button class="sf-submit" type="submit" id="sf-submit-btn">
              <span id="sf-btn-text">Submit Request</span>
              <span id="sf-btn-loading" style="display:none">Submitting…</span>
            </button>
          </div>

          <div class="sf-success" id="sf-success" style="display:none">
            <div class="sf-success__icon">✓</div>
            <h3 class="sf-success__title">Request Received</h3>
            <p class="sf-success__msg">Thank you for your interest in the Nigeria Basketball Archive. Your request has been recorded and you will be contacted shortly.</p>
            <button class="sf-success__back" data-nav="home">Back to Home</button>
          </div>

          <div class="sf-error-general" id="sf-error-general" style="display:none">
            Something went wrong. Please try again or contact us directly.
          </div>
        </form>

        <div class="signup-info">
          <div class="signup-info__block">
            <h3 class="signup-info__title">What you get access to</h3>
            <ul class="signup-info__list">
              <li>Complete NBBF/NABBA board records 1964–2020</li>
              <li>National coaching staff every year</li>
              <li>All domestic tournament results</li>
              <li>Full international competition records</li>
              <li>The Underlying Issues — political analysis</li>
              <li>Full NBBF Constitution</li>
            </ul>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Compiled by</h3>
            <p class="signup-info__text"><strong><a href="https://www.bb4p.org" target="_blank" class="credit-link">Coach OBJ</a></strong> — <a href="https://www.bb4p.org" target="_blank" class="credit-link">Oliver B. Johnson</a>, Nigeria's National Basketball Coach from 1971. This archive is an upgrade of his original book <em>"25 Years of Basketball in Nigeria 1964–1989"</em>.</p>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Edited &amp; Built by</h3>
            <p class="signup-info__text"><strong><a href="https://workwithsadiasfactory.netlify.app" target="_blank" class="credit-link">Halima Abdul</a></strong> — digitised and built this archive for public access, making 56 years of Nigerian basketball history available online for the first time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${footer()}`;
}


// ── GLOBAL SEARCH ─────────────────────────────────────────
function searchPage() {
  const q = (window._searchQuery || "").toLowerCase().trim();

  function highlight(text, query) {
    if (!query || !text) return text || "";
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return text.replace(new RegExp("(" + escaped + ")", "gi"), "<mark>$1</mark>");
  }

  function buildResults(query) {
    if (!query || query.length < 2) return "";
    const results = [];

    // Search records
    records.forEach(r => {
      const yearStr = String(r.year);
      // Board text
      const board = (r.administration.board || "") + " " + (r.administration.coaches || "") + " " + (r.administration.notes || "");
      if (board.toLowerCase().includes(query)) {
        results.push({ type: "record", year: r.year, label: r.year + " — Administration", detail: board.substring(0, 120) + "…", page: "records" });
      }
      // Events
      (r.events || []).forEach(e => {
        const eText = (e.title + " " + e.detail).toLowerCase();
        if (eText.includes(query)) {
          results.push({ type: "event", year: r.year, label: r.year + " — " + e.title, detail: e.detail.substring(0, 120) + "…", page: "records", cat: e.category });
        }
      });
    });

    // Search coaches
    const coachList = typeof coaches !== "undefined" ? coaches : [];
    coachList.forEach(c => {
      if (c.name.toLowerCase().includes(query)) {
        const span = c.years.length === 1 ? "1 year" : c.years.length + " years";
        results.push({ type: "coach", year: Math.min(...c.years), label: c.name, detail: c.role + " · " + span + " active · " + c.wins + " gold results", page: "coaches" });
      }
    });

    if (results.length === 0) return `<div class="search-empty">No results found for "<strong>${query}</strong>"</div>`;

    const grouped = {};
    results.forEach(r => {
      if (!grouped[r.type]) grouped[r.type] = [];
      grouped[r.type].push(r);
    });

    const typeLabels = { record: "Administration", event: "Events", coach: "Coaches", player: "Players" };
    let html = `<p class="search-count">${results.length} result${results.length !== 1 ? "s" : ""} for "<strong>${query}</strong>"</p>`;

    Object.entries(grouped).forEach(([type, items]) => {
      html += `<div class="search-group"><div class="search-group__label">${typeLabels[type] || type} (${items.length})</div>`;
      items.slice(0, 20).forEach(item => {
        html += `<div class="search-result" data-nav="${item.page}">
          <div class="search-result__label">${highlight(item.label, query)}</div>
          <div class="search-result__detail">${highlight(item.detail, query)}</div>
        </div>`;
      });
      if (items.length > 20) html += `<div class="search-more">+${items.length - 20} more results</div>`;
      html += "</div>";
    });
    return html;
  }

  return nav() + `
  <div class="signup-page">
    <div class="signup-page__inner">
      ${crumb("Search")}
      <h1 class="signup-page__title">Search the Archive</h1>
      <p class="signup-page__sub">Search across all 57 years of records, events, coaches, and players.</p>
      <div class="search-bar-wrap">
        <input type="text" id="globalSearch" class="search-bar-input" placeholder="Search names, tournaments, years…" value="${window._searchQuery || ""}" autocomplete="off" />
        <span class="search-bar-icon">🔍</span>
      </div>
      <div id="searchResults">${buildResults(q)}</div>
    </div>
  </div>` + footer();
}

// ── PLAYERS ───────────────────────────────────────────────
function playersPage() {
  // Extract notable players from records data
  const playerMap = {};

  records.forEach(r => {
    (r.events || []).forEach(e => {
      // Look for player mentions in intl events - extract team/player names
      if (e.category === "intl" || e.category === "player") {
        // Extract Nigerian delegation player lists
        const delegMatch = (e.detail || "").match(/Nigeria(?:n)? Delegation[^:]*:(.+?)(?:\.|$)/i);
        if (delegMatch) {
          const names = delegMatch[1].split(/[,;]/).map(n => n.replace(/\([^)]*\)/g, "").replace(/\*|Capt\.|Capt/g, "").trim()).filter(n => n.length > 3 && n.length < 40);
          names.forEach(name => {
            if (!playerMap[name]) playerMap[name] = { years: [], events: [] };
            if (!playerMap[name].years.includes(r.year)) playerMap[name].years.push(r.year);
            playerMap[name].events.push({ year: r.year, title: e.title, outcome: e.outcome || "participated" });
          });
        }
      }
    });
    // Also check admin notes for player names in delegation lists
    const coaches = r.administration.coaches || "";
  });

  // Notable players hardcoded from the source document
  const notable = [
    // ── LEGENDS ─────────────────────────────────────────────────────────────
    { name: "Hakeem Olajuwon", nickname: "The Dream · NBA Champion", note: "Referenced in the 1988 records as \"More Feathers on Akeem The Dream's Hat\". The greatest Nigerian basketball player of all time.", years: [1988], highlight: true },
    { name: "Masai Ujiri", nickname: "NBA Executive / Assistant Coach", note: "Served as Nigeria national team assistant coach 2002–2006. Also ran the Giants of Africa basketball camp in Lagos. Later became President & GM of the Toronto Raptors.", years: [2002, 2003, 2004, 2005, 2006], highlight: true },
    { name: "Olumide Oyedeji", nickname: "NBBF Players Representative", note: "Professional player who competed in the NBA, FIBA World Cup and the Olympics. Later served as NBBF Players Representative. Founded the Olumide Oyedeji Intercollegiate Basketball Championship.", years: [2012, 2013, 2014, 2015, 2016], highlight: true },
    { name: "Uche Nebedum (Mrs.)", nickname: "Player, Coach & Administrator", note: "Captain of East Central State Basketball 1972–74. National Women Captain 1972–78. Assistant Coach/Coach, National Basketball 1974–83. Secretary General NABBA/NBBF 1983–85. Vice President NBBF 1999–2004. FIBA-AFRIQUE Basketball Gold Award 2011 — inducted into the Basketball Hall of Fame in Africa.", years: [1972, 1973, 1974, 1975, 1976, 1983, 1999, 2000, 2001, 2002, 2003, 2004], highlight: true },
    { name: "Isah Umar", nickname: "Niger Potters / NBBF North Central", note: "Known as 'Gudus' (the hammer) at Niger Potters, Minna. Coach OBJ helped secure him admission at St Augustine University, North Carolina. Served as NBBF North Central Zone Rep from 2017. Niger State Basketball Association Chairman. Founded Isah Umar Foundation, building courts in Kontagora and Minna.", years: [2017, 2018, 2019, 2020], highlight: false },
    // ── D'TIGERS — AfroBasket 2017 Squad ──────────────────────────────────
    { name: "Ike Diogu (Capt.)", nickname: "D'Tigers · AfroBasket 2017", note: "Captained Nigeria's D'Tigers squad to a Silver Medal at FIBA AfroBasket 2017 in Senegal and Tunisia.", years: [2017], highlight: false },
    { name: "Ejike Ugboaja", nickname: "D'Tigers Captain / NBBF Players Rep", note: "Long-serving captain and Players Representative of the NBBF from 2017 through 2020.", years: [2017, 2018, 2019, 2020], highlight: false },
    { name: "Yahaya Abdul", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    { name: "Azuoma Dike", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    { name: "Ikechukwu Nwamu", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    { name: "Bryant Mbamalu", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    { name: "Ikenna Iroegbu", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    { name: "Kelechi Anuna", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    { name: "Anthony Odunsi", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    { name: "Akinlola Akingbala", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    { name: "Ayodeji Akindele", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    { name: "O'Karo Akamune", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    { name: "Daniel Ochefu", nickname: "D'Tigers · AfroBasket 2017", note: "Member of Nigeria D'Tigers squad, FIBA AfroBasket 2017.", years: [2017], highlight: false },
    // ── 2015 NBBF/DSTV ALL STAR GAME ──────────────────────────────────────
    { name: "Benjamin Uzoh", nickname: "2015 All Star · Atlantic Conference", note: "Starting five, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Jason Ebie", nickname: "2015 All Star · Atlantic Conference", note: "Starting five, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Romaric Quenum", nickname: "2015 All Star · Atlantic Conference", note: "Starting five, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Tunji Awojobi", nickname: "2015 All Star · Atlantic Conference", note: "Starting five, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Ejeh Briggis", nickname: "2015 All Star · Atlantic Conference", note: "Starting five, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Lanre Alimi", nickname: "2015 All Star · Atlantic Conference Reserve", note: "Reserve, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Emmanuel Dayo", nickname: "2015 All Star · Atlantic Conference Reserve", note: "Reserve, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Emmanuel Balogun", nickname: "2015 All Star · Atlantic Conference Reserve", note: "Reserve, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Malik Tella", nickname: "2015 All Star · Atlantic Conference Reserve", note: "Reserve, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Solomon Ajegbeyi", nickname: "2015 All Star · Atlantic Conference Reserve", note: "Reserve, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Mojubaoluwa Oyeleye", nickname: "2015 All Star · Atlantic Conference Reserve", note: "Reserve, Atlantic Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Usman Abubakar", nickname: "2015 All Star · Savannah Conference", note: "Starting five, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Stanley Gumut", nickname: "2015 All Star · Savannah Conference", note: "Starting five, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Abdul Yahaya", nickname: "2015 All Star · Savannah Conference", note: "Starting five, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Matthew Onmenya", nickname: "2015 All Star · Savannah Conference", note: "Starting five, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Victor Anthony", nickname: "2015 All Star · Savannah Conference", note: "Starting five, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Ibrahim Yusuf", nickname: "2015 All Star · Savannah Conference Reserve", note: "Reserve, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Femi Emmanuel", nickname: "2015 All Star · Savannah Conference Reserve", note: "Reserve, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Abdulwahab Yakubu", nickname: "2015 All Star · Savannah Conference Reserve", note: "Reserve, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Dele Ademola", nickname: "2015 All Star · Savannah Conference Reserve", note: "Reserve, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Umar Garba", nickname: "2015 All Star · Savannah Conference Reserve", note: "Reserve, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Eli Abraham", nickname: "2015 All Star · Savannah Conference Reserve", note: "Reserve, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
    { name: "Manasseh Akerannan", nickname: "2015 All Star · Savannah Conference Reserve", note: "Reserve, Savannah Conference, 2015 NBBF/DSTV All Star Game, Lagos.", years: [2015], highlight: false },
  ];

  function playerCard(p) {
    const first = Math.min(...p.years);
    const last = Math.max(...p.years);
    const period = first === last ? String(first) : first + "–" + last;
    return '<div class="player-card' + (p.highlight ? " player-card--notable" : "") + '">' +
      '<div class="player-card__head">' +
        '<div class="player-card__avatar">' + p.name.charAt(0) + '</div>' +
        '<div class="player-card__info">' +
          '<div class="player-card__name">' + p.name + (p.highlight ? " ⭐" : "") + '</div>' +
          '<div class="player-card__nick">' + p.nickname + ' · ' + period + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="player-card__note">' + p.note + '</div>' +
    '</div>';
  }

  return nav() +
  '<div class="signup-page"><div class="signup-page__inner">' +
  crumb("Players") +
  '<h1 class="signup-page__title">Notable Players</h1>' +
  '<p class="signup-page__sub">Players who represented Nigeria, shaped the game, or left a lasting mark on Nigerian basketball from 1964 to 2020. ⭐ marks the most celebrated figures.</p>' +
  '<div class="players-grid">' + notable.map(playerCard).join("") + '</div>' +
  '<div class="players-note"><strong>Help us grow this page.</strong> If you know of a player who should be included, use the <button class="inline-link" data-nav="contribute">Contribute</button> page to send us their details.</div>' +
  '</div></div>' +
  footer();
}

// ── COACHES ──────────────────────────────────────────────
function coachesPage() {
  const sorted = [...coaches].sort((a,b) => b.years.length - a.years.length || a.name.localeCompare(b.name));

  function outcomeIcon(o) {
    if (o === "win") return '<span class="coach-result__icon coach-result__icon--win">🥇</span>';
    if (o === "runner-up") return '<span class="coach-result__icon coach-result__icon--silver">🥈</span>';
    if (o === "bronze") return '<span class="coach-result__icon coach-result__icon--bronze">🥉</span>';
    return '<span class="coach-result__icon">🏀</span>';
  }

  function coachCard(c) {
    const span = c.years.length === 1 ? "1 year" : c.years.length + " years";
    const first = Math.min(...c.years);
    const last = Math.max(...c.years);
    const period = first === last ? first : first + "–" + last;
    const resultRows = c.results.length ? c.results.map(r =>
      '<div class="coach-result">' + outcomeIcon(r.outcome) +
      '<span class="coach-result__year">' + r.year + '</span>' +
      '<span class="coach-result__title">' + r.title + '</span></div>'
    ).join("") : '<div class="coach-result__empty">No international results recorded for this coach.</div>';

    const medals = (c.wins ? '<span class="coach-medal coach-medal--gold">🥇 ' + c.wins + '</span>' : '') +
                   (c.silver ? '<span class="coach-medal coach-medal--silver">🥈 ' + c.silver + '</span>' : '') +
                   (c.bronze ? '<span class="coach-medal coach-medal--bronze">🥉 ' + c.bronze + '</span>' : '');

    return "<div class=\"coach-card\">" +
      "<div class=\"coach-card__head\">" +
        "<div class=\"coach-card__info\">" +
          "<div class=\"coach-card__name\">" + c.name + "</div>" +
          "<div class=\"coach-card__meta\">" + c.role + " &middot; " + period + " &middot; " + span + "</div>" +
        "</div>" +
        "<div class=\"coach-card__medals\">" + (medals || "<span class=\"coach-card__no-medal\">—</span>") + "</div>" +
      "</div>" +
      "<div class=\"coach-card__results\">" + resultRows + "</div>" +
    "</div>";
  }

  return nav() +
  '<div class="signup-page"><div class="signup-page__inner">' +
  crumb("Coaches") +
  '<h1 class="signup-page__title">Nigeria Basketball Coaches</h1>' +
  '<p class="signup-page__sub">Every coach who has led or assisted the national teams from 1964 to 2020 — with their international results. ' + sorted.length + ' coaches across 56 years of Nigerian basketball.</p>' +
  '<div class="coaches-legend">' +
    '<span class="coach-medal coach-medal--gold">🥇 Gold / 1st Place</span>' +
    '<span class="coach-medal coach-medal--silver">🥈 Silver / 2nd Place</span>' +
    '<span class="coach-medal coach-medal--bronze">🥉 Bronze / 3rd Place</span>' +
    '<span class="coach-medal">🏀 Participated</span>' +
  '</div>' +
  '<div class="coaches-list">' + sorted.map(coachCard).join("") + '</div>' +
  '</div></div>' +
  footer();
}

// ── CONTRIBUTE ────────────────────────────────────────────
function contributePage() {
  return `
  ${nav()}
  <div class="signup-page">
    <div class="signup-page__inner">
      ${crumb("Contribute")}
      <h1 class="signup-page__title">Contribute to the Archive</h1>
      <p class="signup-page__sub">This archive is a living document. If you have records, photographs, corrections or a personal story from Nigerian basketball history, we want to hear from you. All contributions are reviewed by the editorial team before being added.</p>

      <div class="signup-form-wrap">
        <form class="signup-form" id="contribForm" novalidate>

          <div class="sf-group">
            <label class="sf-label" for="cf-name">Your Name <span class="sf-required">*</span></label>
            <input class="sf-input" id="cf-name" type="text" placeholder="e.g. Emeka Okafor" required/>
            <span class="sf-error" id="cerr-name">Please enter your name.</span>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-email">Email Address <span class="sf-required">*</span></label>
            <input class="sf-input" id="cf-email" type="email" placeholder="e.g. emeka@example.com" required/>
            <span class="sf-error" id="cerr-email">Please enter a valid email address.</span>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-type">Type of Contribution <span class="sf-required">*</span></label>
            <select class="sf-input sf-select" id="cf-type" required>
              <option value="">— Select contribution type —</option>
              <option value="Missing Record">Missing Record — fill a gap in the archive</option>
              <option value="Correction">Correction — fix an error in existing records</option>
              <option value="Photo / Document">Photo or Document — newspaper clipping, match photo, official document</option>
              <option value="Personal Testimony">Personal Testimony — your own story in Nigerian basketball</option>
            </select>
            <span class="sf-error" id="cerr-type">Please select a contribution type.</span>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-year">Year (if applicable)</label>
            <input class="sf-input" id="cf-year" type="text" placeholder="e.g. 1995 or 1990–1995"/>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-details">Details <span class="sf-required">*</span></label>
            <textarea class="sf-input sf-textarea" id="cf-details" rows="6" placeholder="Describe your contribution in as much detail as possible. For missing records, include names, dates, results and sources where available. For corrections, describe what is wrong and what the correct information is." required></textarea>
            <span class="sf-error" id="cerr-details">Please provide details of your contribution.</span>
          </div>

          <div class="sf-group">
            <label class="sf-label" for="cf-link">Photo / File Link (if applicable)</label>
            <input class="sf-input" id="cf-link" type="url" placeholder="Google Drive, Dropbox or any public link to your file"/>
            <p class="sf-hint">Upload your photo or document to Google Drive, set sharing to "Anyone with the link", then paste the link here.</p>
          </div>

          <div class="sf-submit-row">
            <button class="sf-submit" type="submit" id="cf-submit-btn">
              <span id="cf-btn-text">Submit Contribution</span>
              <span id="cf-btn-loading" style="display:none">Submitting…</span>
            </button>
          </div>

          <div class="sf-success" id="cf-success" style="display:none">
            <div class="sf-success__icon">✓</div>
            <h3 class="sf-success__title">Contribution Received</h3>
            <p class="sf-success__msg">Thank you for contributing to the Nigeria Basketball Archive. Your submission has been recorded and will be reviewed by the editorial team. You will be acknowledged in the archive if your contribution is included.</p>
            <button class="sf-success__back" data-nav="records">Back to Records</button>
          </div>

          <div class="sf-error-general" id="cf-error-general" style="display:none">
            Something went wrong. Please try again.
          </div>

        </form>

        <div class="signup-info">
          <div class="signup-info__block">
            <h3 class="signup-info__title">What we need</h3>
            <ul class="signup-info__list">
              <li>Board compositions for years with gaps</li>
              <li>Tournament results not in the archive</li>
              <li>Newspaper clippings or match programmes</li>
              <li>Team photographs from any era</li>
              <li>Official NBBF documents</li>
              <li>Personal accounts and testimonies</li>
            </ul>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Years with gaps</h3>
            <ul class="signup-info__list">
              <li>1970 — no events recorded</li>
              <li>1972 — no events recorded</li>
              <li>1974 — no events recorded</li>
              <li>1976 — no events recorded</li>
              <li>1978 — no events recorded</li>
              <li>1984 — no events recorded</li>
              <li>1985 — no events recorded</li>
              <li>1987 — no events recorded</li>
              <li>1993 — no events recorded</li>
              <li>2003 — no events recorded</li>
              <li>2015 — no events recorded</li>
              <li>2018 — no events recorded</li>
            </ul>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Acknowledgement</h3>
            <p class="signup-info__text">All contributors whose submissions are included in the archive will be acknowledged by name. This archive exists because of people who care about Nigerian basketball history.</p>
          </div>
          <div class="signup-info__block">
            <h3 class="signup-info__title">Edited &amp; Built by</h3>
            <p class="signup-info__text"><strong><a href="https://workwithsadiasfactory.netlify.app" target="_blank" class="credit-link">Halima Abdul</a></strong> — digitised and built this archive for public access, making 56 years of Nigerian basketball history available online for the first time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${footer()}`;
}

// ── RENDER ───────────────────────────────────────────────
function render() {
  const app = document.getElementById("app");
  if (!hasAccess && page !== "signup" && page !== "contribute") {
    app.innerHTML = landingPage();
  } else if (page === "home") app.innerHTML = homePage();
  else if (page === "records") app.innerHTML = recordsPage();
  else if (page === "analysis") app.innerHTML = analysisPage();
  else if (page === "constitution") app.innerHTML = constitutionPage();
  else if (page === "about") app.innerHTML = aboutPage();
  else if (page === "signup") app.innerHTML = signupPage();
  else if (page === "search") app.innerHTML = searchPage();
  else if (page === "players") app.innerHTML = playersPage();
  else if (page === "coaches") app.innerHTML = coachesPage();
  else if (page === "contribute") app.innerHTML = contributePage();
  bindEvents();
}

function rebuildRecords() {
  const visible = getVisible();
  const sorted = [...visible].sort((a,b) => b.year - a.year);
  const count = document.getElementById("rpCount");
  if (count) count.innerHTML = `Showing <strong>${visible.length}</strong> of <strong>${records.length}</strong> years — click any row to expand`;
  const container = document.getElementById("ybContainer");
  if (container) {
    container.innerHTML = sorted.length === 0
      ? '<div class="empty-state">No records match your search.</div>'
      : sorted.map(yearBlock).join("");
    bindToggles();
  }
}

function bindToggles() {
  document.querySelectorAll(".yb__head").forEach(head => {
    head.addEventListener("click", (e) => {
      // Don't toggle if clicking share or print buttons
      if (e.target.closest(".yb__share-btn") || e.target.closest(".yb__print-btn")) return;
      const yb = head.closest(".yb");
      const body = yb.querySelector(".yb__body");
      const btn = yb.querySelector(".yb__btn");
      const isOpen = body.classList.contains("open");
      body.classList.toggle("open", !isOpen);
      btn.classList.toggle("open", !isOpen);
      head.classList.toggle("open", !isOpen);
    });
  });

  // Share buttons
  document.querySelectorAll(".yb__share-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const year = btn.dataset.year;
      const url = window.location.origin + window.location.pathname + "?year=" + year;
      const text = "Nigeria Basketball Archive — " + year + " records: ";
      if (navigator.share) {
        navigator.share({ title: "Nigeria Basketball " + year, text: text, url: url });
      } else {
        // Show share popup
        const popup = document.createElement("div");
        popup.className = "share-popup";
        popup.innerHTML = `<div class="share-popup__inner">
          <div class="share-popup__title">Share ${year}</div>
          <div class="share-popup__btns">
            <a class="share-popup__btn share-popup__btn--wa" href="https://api.whatsapp.com/send?text=${encodeURIComponent(text + url)}" target="_blank">WhatsApp</a>
            <a class="share-popup__btn share-popup__btn--tw" href="https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}" target="_blank">Twitter / X</a>
            <button class="share-popup__btn share-popup__btn--copy" id="copyShareLink">Copy Link</button>
          </div>
          <button class="share-popup__close">✕</button>
        </div>`;
        document.body.appendChild(popup);
        document.getElementById("copyShareLink").onclick = () => {
          navigator.clipboard.writeText(url).then(() => {
            document.getElementById("copyShareLink").textContent = "Copied!";
            setTimeout(() => popup.remove(), 1200);
          });
        };
        popup.querySelector(".share-popup__close").onclick = () => popup.remove();
        popup.addEventListener("click", (ev) => { if (ev.target === popup) popup.remove(); });
      }
    });
  });

  // Print/export buttons
  document.querySelectorAll(".yb__print-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const year = parseInt(btn.dataset.year);
      const rec = records.find(r => r.year === year);
      if (!rec) return;
      const evRows = (rec.events || []).map(ev =>
        `<tr><td style="padding:6px 8px;border-bottom:1px solid #eee;font-weight:600;color:#0a2218;font-size:12px">${ev.title}</td><td style="padding:6px 8px;border-bottom:1px solid #eee;font-size:12px;color:#444">${ev.detail}</td></tr>`
      ).join("");
      const win = window.open("", "_blank");
      win.document.write(`<!DOCTYPE html><html><head><title>Nigeria Basketball ${year}</title>
      <style>body{font-family:Georgia,serif;max-width:800px;margin:40px auto;color:#222;line-height:1.5}
      h1{color:#0a2218;border-bottom:3px solid #d4621a;padding-bottom:8px}
      h2{color:#0a2218;font-size:14px;text-transform:uppercase;letter-spacing:.08em;margin-top:24px}
      p{font-size:13px;margin:4px 0}table{width:100%;border-collapse:collapse;margin-top:8px}
      th{background:#0a2218;color:#fff;padding:8px;text-align:left;font-size:12px}
      .footer{margin-top:40px;font-size:11px;color:#999;border-top:1px solid #eee;padding-top:8px}
      @media print{body{margin:20px}}</style></head><body>
      <h1>Nigeria Basketball ${year}</h1>
      <h2>Administration</h2>
      <p>${rec.administration.board || "—"}</p>
      ${rec.administration.coaches ? `<h2>Coaches</h2><p>${rec.administration.coaches}</p>` : ""}
      ${rec.administration.notes ? `<h2>Notes</h2><p>${rec.administration.notes}</p>` : ""}
      ${evRows ? `<h2>Events &amp; Competitions</h2><table><tr><th>Event</th><th>Details</th></tr>${evRows}</table>` : ""}
      <div class="footer">Nigeria Basketball Archive 1964–2020 · Compiled by Coach OBJ · nigerian-basketball-archive.vercel.app</div>
      <script>window.onload = function(){ window.print(); }<\/script>
      </body></html>`);
      win.document.close();
    });
  });
}


function bindEvents() {
  document.querySelectorAll("[data-nav]").forEach(el => {
    el.addEventListener("click", () => navigate(el.dataset.nav));
  });
  document.querySelectorAll(".decade-tile").forEach(t => {
    t.addEventListener("click", () => navigate("records", { decade: t.dataset.decade }));
  });
  const heroSearch = document.getElementById("heroSearch");
  const heroBtn = document.getElementById("heroSearchBtn");

  function runSearchPreview(q) {
    const preview = document.getElementById("searchPreview");
    const results = document.getElementById("searchPreviewResults");
    if (!preview || !results) return;
    if (!q) { preview.style.display = "none"; return; }
    const matches = records.filter(yr => {
      const txt = (yr.administration.board + yr.administration.coaches + yr.events.map(e => e.title + e.detail).join(" ")).toLowerCase();
      return txt.includes(q.toLowerCase()) || String(yr.year).includes(q);
    }).slice(0, 4);
    if (matches.length === 0) { preview.style.display = "none"; return; }
    results.innerHTML = matches.map(yr => {
      const ev = yr.events.find(e => (e.title + e.detail).toLowerCase().includes(q.toLowerCase()));
      return "<div class='sp-row'><span class='sp-year'>" + yr.year + "</span><span class='sp-text'>" + (ev ? ev.title : "Board & Administration record") + "</span></div>";
    }).join("");
    preview.style.display = "block";
  }

  if (heroBtn && heroSearch) {
    heroBtn.addEventListener("click", () => {
      const q = heroSearch.value.trim();
      if (!hasAccess) { runSearchPreview(q); }
      else if (q) navigate("records", { search: q });
      else navigate("records");
    });
    heroSearch.addEventListener("input", e => {
      if (!hasAccess) runSearchPreview(e.target.value.trim());
    });
    heroSearch.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        const q = heroSearch.value.trim();
        if (!hasAccess) { runSearchPreview(q); }
        else if (q) navigate("records", { search: q });
        else navigate("records");
      }
      if (e.key === "Escape") { const p = document.getElementById("searchPreview"); if (p) p.style.display = "none"; }
    });
  }
  const searchPreviewCta = document.getElementById("searchPreviewCta");
  if (searchPreviewCta) searchPreviewCta.addEventListener("click", () => { page = "signup"; pushHistory("signup", {}); render(); window.scrollTo(0,0); });
  const rpSearch = document.getElementById("rpSearch");
  if (rpSearch) {
    rpSearch.addEventListener("input", e => { state.search = e.target.value; rebuildRecords(); });
  }

  // Global search page handler
  const globalSearch = document.getElementById("globalSearch");
  if (globalSearch) {
    globalSearch.focus();
    globalSearch.addEventListener("input", e => {
      window._searchQuery = e.target.value;
      const q = e.target.value.toLowerCase().trim();
      const resultsEl = document.getElementById("searchResults");
      if (!resultsEl) return;
      if (!q || q.length < 2) { resultsEl.innerHTML = ""; return; }

      const results = [];
      records.forEach(r => {
        const board = (r.administration.board || "") + " " + (r.administration.coaches || "") + " " + (r.administration.notes || "");
        if (board.toLowerCase().includes(q)) {
          results.push({ type: "record", year: r.year, label: r.year + " — Administration", detail: board.substring(0, 120) + "…", page: "records" });
        }
        (r.events || []).forEach(ev => {
          if ((ev.title + " " + ev.detail).toLowerCase().includes(q)) {
            results.push({ type: "event", year: r.year, label: r.year + " — " + ev.title, detail: (ev.detail || "").substring(0, 120) + "…", page: "records" });
          }
        });
      });
      const coachList = typeof coaches !== "undefined" ? coaches : [];
      coachList.forEach(c => {
        if (c.name.toLowerCase().includes(q)) {
          results.push({ type: "coach", year: Math.min(...c.years), label: c.name, detail: c.role + " · " + c.years.length + " years active", page: "coaches" });
        }
      });

      if (results.length === 0) { resultsEl.innerHTML = '<div class="search-empty">No results found for <strong>' + q + '</strong></div>'; return; }

      const grouped = {};
      results.forEach(r => { if (!grouped[r.type]) grouped[r.type] = []; grouped[r.type].push(r); });
      const typeLabels = { record: "Administration", event: "Events", coach: "Coaches" };
      let html = '<p class="search-count">' + results.length + ' result' + (results.length !== 1 ? "s" : "") + ' for <strong>' + q + '</strong></p>';
      Object.entries(grouped).forEach(([type, items]) => {
        html += '<div class="search-group"><div class="search-group__label">' + (typeLabels[type] || type) + ' (' + items.length + ')</div>';
        items.slice(0, 15).forEach(item => {
          html += '<div class="search-result" data-nav="' + item.page + '"><div class="search-result__label">' + item.label + '</div><div class="search-result__detail">' + item.detail + '</div></div>';
        });
        if (items.length > 15) html += '<div class="search-more">+' + (items.length - 15) + ' more</div>';
        html += '</div>';
      });
      resultsEl.innerHTML = html;

      // Bind result clicks
      resultsEl.querySelectorAll(".search-result").forEach(el => {
        el.addEventListener("click", () => { navigate(el.dataset.nav); });
      });
    });
  }

  // Inline-link buttons (used in players page etc.)
  document.querySelectorAll(".inline-link").forEach(btn => {
    btn.addEventListener("click", () => navigate(btn.dataset.nav));
  });
  document.querySelectorAll(".rp-pill").forEach(p => {
    p.addEventListener("click", () => {
      state.decade = p.dataset.decade;
      document.querySelectorAll(".rp-pill").forEach(x => x.classList.remove("active"));
      p.classList.add("active");
      rebuildRecords();
    });
  });
  bindToggles();

  // Landing page CTAs
  const landingCta = document.getElementById("landingCta");
  const landingCta2 = document.getElementById("landingCta2");
  if (landingCta) landingCta.addEventListener("click", () => { page = "signup"; pushHistory("signup", {}); render(); window.scrollTo(0,0); });
  if (landingCta2) landingCta2.addEventListener("click", () => { page = "signup"; pushHistory("signup", {}); render(); window.scrollTo(0,0); });
  const landingContribute = document.getElementById("landingContribute");
  if (landingContribute) landingContribute.addEventListener("click", () => { page = "contribute"; pushHistory("contribute", {}); render(); window.scrollTo(0,0); });
  const timelineCta = document.getElementById("timelineCta");
  if (timelineCta) timelineCta.addEventListener("click", () => { page = "signup"; pushHistory("signup", {}); render(); window.scrollTo(0,0); });

  // Contribution form
  const contribForm = document.getElementById("contribForm");
  if (contribForm) {
    contribForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const type = document.getElementById("cf-type").value;
      const year = document.getElementById("cf-year").value.trim();
      const details = document.getElementById("cf-details").value.trim();
      const fileLink = document.getElementById("cf-link").value.trim();

      let valid = true;
      const showErr = (id, show) => { document.getElementById(id).style.display = show ? "block" : "none"; };
      if (!name) { showErr("cerr-name", true); valid = false; } else showErr("cerr-name", false);
      if (!email || email.indexOf("@") < 1) { showErr("cerr-email", true); valid = false; } else showErr("cerr-email", false);
      if (!type) { showErr("cerr-type", true); valid = false; } else showErr("cerr-type", false);
      if (!details) { showErr("cerr-details", true); valid = false; } else showErr("cerr-details", false);
      if (!valid) return;

      const btn = document.getElementById("cf-submit-btn");
      document.getElementById("cf-btn-text").style.display = "none";
      document.getElementById("cf-btn-loading").style.display = "inline";
      btn.disabled = true;

      try {
        const contribData = new FormData();
        contribData.append("formType", "contribution");
        contribData.append("contributorName", name);
        contribData.append("email", email);
        contribData.append("type", type);
        contribData.append("year", year);
        contribData.append("details", details);
        contribData.append("fileLink", fileLink);
        await fetch(CONTRIB_URL, { method: "POST", body: contribData, mode: "no-cors" });
        contribForm.style.display = "none";
        document.getElementById("cf-success").style.display = "flex";
      } catch (err) {
        document.getElementById("cf-error-general").style.display = "block";
        document.getElementById("cf-btn-text").style.display = "inline";
        document.getElementById("cf-btn-loading").style.display = "none";
        btn.disabled = false;
      }
    });
  }

  // Signup form
  const form = document.getElementById("signupForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("sf-name").value.trim();
      const email = document.getElementById("sf-email").value.trim();
      const org = document.getElementById("sf-org").value.trim();
      const role = document.getElementById("sf-role").value;

      // Validate
      let valid = true;
      const showErr = (id, show) => { document.getElementById(id).style.display = show ? "block" : "none"; };
      if (!name) { showErr("err-name", true); valid = false; } else showErr("err-name", false);
      if (!email || email.indexOf("@") < 1) { showErr("err-email", true); valid = false; } else showErr("err-email", false);
      if (!org) { showErr("err-org", true); valid = false; } else showErr("err-org", false);
      if (!role) { showErr("err-role", true); valid = false; } else showErr("err-role", false);
      if (!valid) return;

      // Submit
      const btn = document.getElementById("sf-submit-btn");
      document.getElementById("sf-btn-text").style.display = "none";
      document.getElementById("sf-btn-loading").style.display = "inline";
      btn.disabled = true;

      try {
        const signupData = new FormData();
        signupData.append("formType", "signup");
        signupData.append("name", name);
        signupData.append("email", email);
        signupData.append("organisation", org);
        signupData.append("role", role);
        await fetch(FORM_URL, { method: "POST", body: signupData, mode: "no-cors" });
        grantAccess();
        form.style.display = "none";
        document.getElementById("sf-success").style.display = "flex";
        setTimeout(() => { navigate("home"); }, 2500);
      } catch (err) {
        document.getElementById("sf-error-general").style.display = "block";
        document.getElementById("sf-btn-text").style.display = "inline";
        document.getElementById("sf-btn-loading").style.display = "none";
        btn.disabled = false;
      }
    });
  }
}

render();
