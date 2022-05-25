let url = 'https://axelgzca.github.io/information-json/information.json';
function loadInfo() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => showData(data))
        .catch((error) => console.log(error));
    const showData = (data) => {
        console.log(data)
        let Name = "";
        let Beginning = "";
        let Personal = "";
        let Languages = "";
        let Cecyte = "";
        let Utrm = "";
        let Skills = "";
        Name += `
             ${data[0].Name}
        `;
        Beginning += `
            ${data[1].About}
        `;
        Personal += `
            <li>
                Birthday: ${data[2].Birthday}
            </li>
            <li>
                Phone: ${data[2].Phone}
            </li>
            <li>
                City: ${data[2].City}
            </li>
            <li>
                Age: ${data[2].Age}
            </li>
            <li>
                Degree: ${data[2].Degree}
            </li>
            <li>
                Email: ${data[2].Email}
            </li>
            <li>
                Working: ${data[2].Working}
            </li>
        `;
        Languages += `
            <li>
                Spanish: ${data[3].Spanish}
            </li>
            <li>
                English: ${data[3].English}
            </li>
        `;
        Cecyte += `
            <li>
                Preparatory: ${data[4].Preparatory}
            </li>
            <li>
                Degree Of Study: ${data[4].DegreeStudy}
            </li>
            <li>
                Career Earned: ${data[4].CareerEarned}
            </li>
            <li>
                Period Preparatory: ${data[4].PeriodPreparatory}
            </li>
        `;
        Utrm += `
            <li>
                University: ${data[5].University}
            </li>
            <li>
                Degree Of Study: ${data[5].DegreeOfStudy}
            </li>
            <li>
                College Career: ${data[5].CollegeCareer}
            </li>
            <li>
                Period University: ${data[5].PeriodUniversity}
            </li>
        `;
        Skills += `
            ${data[6].Description}
            </li>
            <li>
                HTML: ${data[6].HTML}
            </li>
            <li>
                CSS: ${data[6].CSS}
            </li>
            <li>
                VUE: ${data[6].VUE}
            </li>
            <li>
                MYSQL: ${data[6].MYSQL}
            </li>
            <li>
                JAVA: ${data[6].JAVA}
            </li>
            <li>
                PHYTON: ${data[6].PHYTON}
            </li>
            <li>
                JAVASCRIPT: ${data[6].JAVASCRIPT}
            </li>
            <li>
                PHP: ${data[6].PHP}
            </li>
        `;
        document.getElementById('Nam').innerHTML = Name;
        document.getElementById('Beg').innerHTML = Beginning;
        document.getElementById('Per').innerHTML = Personal;
        document.getElementById('Lan').innerHTML = Languages;
        document.getElementById('Cec').innerHTML = Cecyte;
        document.getElementById('Ut').innerHTML = Utrm;
        document.getElementById('Ski').innerHTML = Skills;
    }
}
loadInfo();