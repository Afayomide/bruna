import building from "../assets/companybuilding.jpg"

function Bruna() {
    return(
        <div>
            <h3>
                Bruna
            </h3>
            <section>
                <h5>
                    Company
                </h5>
                <p>
                Bruna Semijoias was founded in 1984 by friends and partners Calipo and Guaracy. At the time, Calipo had technical knowledge acquired over years in the goldsmith's shop. With a bold vision, the two formed a partnership and began producing pieces with a sophisticated, high-quality design. 
<br/>Our slogan is “TECHNOLOGY AT THE SERVICE OF BEAUTY”. To achieve this, we use the best electroplating technology in our finishing system.
                </p>
            </section>

            <section>
                <h5>
                Our objectives
                </h5>
                <p>
                To be a leader in the semi-jewelry market, offering a timeless and high quality design, with pieces that can be used by women of different age groups
                </p>
                <img src={building}/>
            </section>
        </div>
    )
}

export default Bruna