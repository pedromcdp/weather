type Props = {
  place_text: string;
  place_name: string;
};

export function SearchItemCell({ place_text, place_name }: Props) {
  return (
    <div className="p-2 block w-full hover:bg-zinc-500/20 cursor-pointer">
      <button className="flex flex-col text-left">
        <p className="font-medium">{place_text}</p>
        <p className="text-sm">{place_name}</p>
      </button>
    </div>
  );
}
