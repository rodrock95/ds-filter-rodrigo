import Button from "../Button"
import "./styles.css"

export default function CardFilter(){
    return(
        <div className="dsf-container card-filter mt20 mb20">
            <form >
                <div>
                    <input
                        name="price-min"
                        type="text"
                        placeholder="Preço mínimo"
                    />
                </div>
                <div>
                    <input
                        name="price-max"
                        type="text"
                        placeholder="Preço máximo"
                    />
                </div>
            </form>
            <Button text="Filtrar"/>
        </div>
    )
}