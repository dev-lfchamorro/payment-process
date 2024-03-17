import "./styles.scss";

type CreditCardFrontProps = {
  cardHolder: string;
  cardNumber: number;
  expiry: number;
  logo: string;
};

const CreditCardFront: React.FC<CreditCardFrontProps> = ({
  cardHolder,
  cardNumber,
  expiry,
  logo,
}) => {
  return (
    <div className="credit-card">
      <div className="credit-card-front">
        <div className="card-logo">
          <img src={logo} alt="credit-card-logo" width={30} height={30} />
        </div>
        <div className="card-number">{cardNumber}</div>
        <div className="card-details">
          <div className="card-holder">{cardHolder}</div>
          <div className="expiry">{expiry}</div>
        </div>
      </div>
    </div>
  );
};

type CreditCardBackProps = {
  cvv: number;
  logo: string;
};

const CreditCardBack: React.FC<CreditCardBackProps> = ({ cvv, logo }) => {
  return (
    <div className="credit-card">
      <div className="credit-card-back">
        <div className="cvv">{cvv}</div>
        <div className="card-logo">
          <img src={logo} alt="credit-card-logo" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export { CreditCardFront, CreditCardBack };
