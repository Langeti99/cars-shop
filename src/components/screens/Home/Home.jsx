import styles from "./Home.module.css";
import { CarItem } from "./../../car-item";

const CARS = [
  {
    id: 1,
    name: "Bugatti",
    image: "/cars/1.jpg",
    price: 122000,
    genres: ["Спортивні автомобілі", "Лімузини класу люкс", "Гіперкари"],
    description:
      "Bugatti — це високопродуктивний виробник автомобілів з історією, відомий своєю ексклюзивністю, розкішшю і найвищою швидкістю.",
  },
  {
    id: 2,
    name: "Lamborghini",
    image: "/cars/2.jpg",
    price: 150000,
    genres: ["Суперкари", "Ексклюзивні автомобілі", "Екзотичні автомобілі"],
    description:
      "Bugatti — це високопродуктивний виробник автомобілів з історією, відомий своєю ексклюзивністю, розкішшю і найвищою швидкістю.",
  },
  {
    id: 3,
    name: "Mclaren",
    image: "/cars/3.jpg",
    price: 122000,
    genres: [
      "Спортивні автомобілі",
      "Автомобілі з карбоновим каркасом",
      "Гіперкари",
    ],
    description:
      "Bugatti — це високопродуктивний виробник автомобілів з історією, відомий своєю ексклюзивністю, розкішшю і найвищою швидкістю.",
  },
];

export const Home = () => {
  return (
    <div className={styles.home}>
      {CARS.map((car) => (
        <CarItem car={car} key={car.id} />
      ))}
    </div>
  );
};
