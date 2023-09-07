import "./index.css"

const Bottombar = () => {
  return (
    <div className="bottomBar">
      <div className="bottomBar__wrapper">
        <img className="bottomBar__socialNetworks" src="/social-networks.png" alt="Social medias" />
        <img className="bottomBar__acceptedPayments" src="/accepted-payment-methods.png" alt="Accepted payments" />
        <img className="bottomBar__poweredBy" src="/powered-by.png" alt="Powered by" />
      </div>
    </div>
  )
}

export default Bottombar