import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Dados de cobrança">
      <>
        <Row>
          <InputGroup>
            <label htmlFor="fullName">Nome completo</label>
            <input type="text" id="fullName" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" />
          </InputGroup>
        </Row>
        <h3 className="margin-top">Dados de entrega - contéudo digital</h3>
        <Row>
          <InputGroup>
            <label htmlFor="deliveryEmail">E-mail</label>
            <input type="email" id="deliveryEmail" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirmDeliveryEmail">Confirm e-mail</label>
            <input type="email" id="confirmDeliveryEmail" />
          </InputGroup>
        </Row>
      </>
    </Card>
    <Card title="Pagamento">
      <div>
        <p>
          Ao optar por essa forma de pagamento, é importante lembrar que a
          confirmação pode levar até 3 dias úteis, devido aos prazos
          estabelecidos pelas instituições financeiras. Portanto, a liberação do
          código de ativação do jogo adquirido ocorrerá somente após a aprovação
          do pagamento do boleto.
        </p>
        <Row>
          <InputGroup>
            <label htmlFor="cardOwner">Nome do titular do cartão</label>
            <input type="text" id="cardOwner" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpfOwner">CPF do titular do cartão</label>
            <input type="text" id="cpfOwner" />
          </InputGroup>
        </Row>
        <Row marginTop="24px">
          <InputGroup>
            <label htmlFor="cardDisplayName">Nome no cartão</label>
            <input type="text" id="cardDisplayName" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input type="text" id="cardNumber" />
          </InputGroup>
          <InputGroup maxWidth="123px">
            <label htmlFor="expiresMonth">Mes do vencimento</label>
            <input type="text" id="expiresMonth" />
          </InputGroup>
          <InputGroup maxWidth="123px">
            <label htmlFor="expiresYear">Ano do vencimento</label>
            <input type="text" id="expiresYear" />
          </InputGroup>
          <InputGroup maxWidth="48px">
            <label htmlFor="cardCode">CVV</label>
            <input type="text" id="cardCode" />
          </InputGroup>
        </Row>
        <Row>
          <InputGroup maxWidth="116px">
            <label htmlFor="installments">Parcelamento</label>
            <select>
              <option>1x de R$ 300,00</option>
              <option>2x de R$ 150,00</option>
              <option>3x de R$ 100,00</option>
            </select>
          </InputGroup>
        </Row>
      </div>
    </Card>
    <Button
      variant="primary"
      type="button"
      title="Clique aqui para finalizar a compra"
    >
      Finalizar compra
    </Button>
  </div>
)

export default Checkout
