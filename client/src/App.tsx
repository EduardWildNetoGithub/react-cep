import { useRef, useState } from "react"
import { GlobalStyles } from "./Styles/GlobalStyles"
import { ContainerStyles } from "./Styles/ContainerStyles/ContainerStyles"
import { InputStyles } from "./Styles/InputStyles/InputStyles"
import { SmallButtomStyles } from "./Styles/SmallButtonStyles.ts/SmallButtonStyles"
import { BiSearchAlt } from "react-icons/bi"
import Switch from "react-switch"
import axios from "axios"
import { CEPType } from "./Types/CEPTypes"

function App() {

  const [data, setData] = useState<CEPType>(null!)

  const CEPInput = useRef<HTMLInputElement>(null!)

  const getCEP = () => {
    axios.get(`https://cep.awesomeapi.com.br/json/${CEPInput.current.value}`).then(
      (response) => {
        const data = response.data
        setData(data)
      }
    ).catch(
      () => {
        alert("algo de errado aconteceu")
      }
    )
  }

  return (
    <>
        <GlobalStyles/>
        <ContainerStyles>
          <h1 className="title">Buscador de CEP</h1>
          <div className="div-to-align-um">
              <InputStyles ref={CEPInput} type="text"/>
              <SmallButtomStyles onClick={() => {getCEP()}}><BiSearchAlt/></SmallButtomStyles>
          </div>
          <div >
              {data !== null ? (
                <>
                  <GlobalStyles/>
                  <div className="info-container">
                    <h2 className="info">CEP: {data.cep}</h2>
                    <h2 className="info">Address: {data.address}</h2>
                    <h2 className="info">State: {data.state}</h2>
                    <h2 className="info">District: {data.district}</h2>
                    <h2 className="info">Latitude: {data.lat}</h2>
                    <h2 className="info">Loongitude: {data.lng}</h2>
                    <h2 className="info">City: {data.city}</h2>
                    <h2 className="info">City IBGE: {data.city_ibge}</h2>
                    <h2 className="info">DDD: {data.ddd}</h2>
                  </div>
                </>
                
              ): (
                <></>
              )}
          </div>
        </ContainerStyles>
    </>
  )
}

export default App
