// import leetcodeImg from "D:\Downloads\react-js-personal-portfolio-main\react-js-personal-portfolio-main\public\img\image.png";
// import plasmaImg from "D:\Downloads\react-js-personal-portfolio-main\react-js-personal-portfolio-main\public\img\image.png";
// import binaryImg from "D:\Downloads\react-js-personal-portfolio-main\react-js-personal-portfolio-main\public\img\image.png";
// import encryptImg from "D:\Downloads\react-js-personal-portfolio-main\react-js-personal-portfolio-main\public\img\image.png";

export default function Awards() {
    const awardsData = [
        {
            id: 1,
            title: "LeetCode & GeeksforGeeks",
            description: "Solved 500+ coding problems on GeeksforGeeks and LeetCode"
        },
        {
            id: 2,
            title: "PLASMA 2K23",
            description: "2nd Runner-Up at PLASMA 2K23 National Level Hackathon"
        },
        {
            id: 3,
            title: "Binary Blooms",
            description: "Winner of the Binary Blooms Coding Competition"
            
        },
        {
            id: 4,
            title: "ENCRYPT-24",
            description: "Runner-Up at ENCRYPT-24 Coding Competition"
      }
    ];

    return (
        <section className="awards--section" id="Awards">
            <div className="awards--container-box">
                <div className="awards--container">
                    <p className="sub--title">Achievements</p>
                    <h2 className="section--heading">Awards & Competitions</h2>
                </div>

                <div className="awards--section--container">
                    {awardsData.map((award) => (
                        <div key={award.id} className="awards--card">
                            <div className="awards--img">
                            </div>
                            <div className="awards--content">
                                <h3 className="awards--title">{award.title}</h3>
                                <p className="awards--description">{award.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
