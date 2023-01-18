import Image from 'next/image';

const ModelCard = ({ maker, onClick, model, versions }) => {
  const imgModel = (() => {
    switch (model) {
      case '3 e-tense':
        return '3';
      case 'Leaf 2018':
        return 'Leaf';
      case 'e-Up':
        return 'eup';
      default:
        return model;
    }
  })();

  const width = 200;

  return (
    <li className="border rounded-lg overflow-hidden transition-colors hover:bg-light-primary-3 cursor-pointer">
      <Image
        alt=""
        src={`https://cdn.imagin.studio/getImage?customer=frfreelance-thiseas&make=${maker}&modelFamily=${imgModel}&width=${width}`}
        width="200"
        height="200"
        className="h-auto unselectable"
      />
      <h3 className="text-center mb-4 font-extrabold">
        {maker} {model}
      </h3>
      <p className="text-center bg-light-primary-2 text-white">
        {versions} version{versions > 1 && 's'} testée{versions > 1 && 's'}
      </p>
    </li>
  );
};

export default ModelCard;
