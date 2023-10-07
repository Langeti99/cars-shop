import styles from "./Home.module.css";
import { CarItem } from "./../../car-item";

const CARS = [
  {
    id: 1,
    name: "Bugatti",
    image: "/cars/1.jpg",
    price: 122000,
    video: "https://www.youtube.com/embed/yM0azrA_uWE?si=aJbpZezuUxfPV00L",
    genres: ["Спортивні автомобілі", "Лімузини класу люкс", "Гіперкари"],
    description:
      "'Бугатті' - це вища форма автомобільної майстерності, яка поєднує в собі неймовірну швидкість, розкіш та ексклюзивність. Ця французька автомобільна марка відома своєю бездоганною якістю, найкращими матеріалами і надзвичайною увагою до деталей. Кожен 'Бугатті' - це шедевр інженерної майстерності, призначений для задоволення найвибагливіших автомобільних ентузіастів.",
  },
  {
    id: 2,
    name: "Lamborghini",
    image: "/cars/2.jpg",
    price: 150000,
    video: "https://www.youtube.com/embed/qZdjdfochkI?si=JN5VRJQhtLXMXtoW",
    genres: ["Суперкари", "Ексклюзивні автомобілі", "Екзотичні автомобілі"],
    description:
      "Bugatti — це високопродуктивний виробник автомобілів з історією, відомий своєю ексклюзивністю, розкішшю і найвищою швидкістю.",
  },
  {
    id: 3,
    name: "Mclaren",
    image: "/cars/3.jpg",
    price: 122000,
    video: "https://www.youtube.com/embed/t9-cMiEDNyk?si=l2Dg__vfgnzo3Gz0",
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
