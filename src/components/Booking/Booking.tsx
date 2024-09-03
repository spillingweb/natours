import Button from "../UI/Button";
import HeadingLarge from "../UI/HeadingLarge";
import Input from "../UI/Input";
import Radio from "../UI/Radio";
import styles from "./Booking.module.scss";

const Booking: React.FC = () => {
  return (
    <section id="booking" className={styles.booking}>
      <div className={styles.container}>
        <HeadingLarge className="margin-bottom-medium">
          Start Booking Now!
        </HeadingLarge>
        <form id="bookingForm" className={styles.form}>
          <div className="margin-bottom-small">
            <Input
              type="text"
              id="name"
              placeholder="Full name"
              label="Full name"
            />
          </div>
          <div className="margin-bottom-small">
            <Input
              type="email"
              id="email"
              placeholder="Email address"
              label="Email address"
            />
          </div>
          <div className="margin-bottom-medium">
            <Radio name="size" id="small" labelText="Small tour group" />
            <Radio name="size" id="large" labelText="Large tour group" />
          </div>
          <Button element="button" color="green">Next Step &rarr;</Button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
