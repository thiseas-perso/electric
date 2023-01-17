import Image from 'next/image';

const ModelCard = ({ maker, onClick, model }) => {
  const imgModel = (() => {
    switch (model) {
      case '3 e-tense':
        return '3';
      case 'Leaf 2018':
        return 'Leaf';
      case 'e-up':
        return 'up';
      default:
        return model;
    }
  })();

  const paintDescription = (() => {
    const colors = ['blue', 'red', 'green', 'white', 'black', 'gray', 'silver'];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  })();
  return (
    <div>
      <Image
        alt=""
        // src={`https://cdn.imagin.studio/getImage?customer=frfreelance-thiseas&make=${maker}&modelFamily=${model}&width=400`}
        src={`https://cdn.imagin.studio/getImage?customer=frfreelance-thiseas&make=${maker}&modelFamily=${imgModel}&width=400`}
        width="200"
        height="200"
      />
      {maker} {model}
    </div>
  );
};

export default ModelCard;
