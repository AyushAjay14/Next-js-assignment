import { followCharacter } from "@/mutations/follow";
import { getFollowedCharacters } from "@/queries/followedCharacters";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Character = ({ character }) => {
  const { id, image, name, status, location, gender, species, type, origin } = character;
  const [isFollowed, setIsFollowed] = useState(false);
  useEffect(() => {
    const _getFollowedCharacters = async () => {
      const followedCharacters = await getFollowedCharacters();
      const result = followedCharacters.find((followed) => followed.id === id);
      if (result) setIsFollowed(true);
    };
    _getFollowedCharacters();
  }, [isFollowed, id]);
  const onFollow = async () => {
    await followCharacter({ id });
    setIsFollowed(true);
  };
  return (
    <div className="p-4 h-full w-full flex flex-row flex-wrap gap-4 justify-center">
      <Image src={image} className="flex-1 h-full w-full" alt={name} height={700} width={500} />
      <div className="flex-1 flex flex-col font-black text-xl">
        <div>
          Name: <span className="italic font-normal">{name}</span>
        </div>
        <div>
          Status: <span className="italic font-normal">{status}</span>
        </div>
        <div>
          Gender: <span className="italic font-normal">{gender}</span>
        </div>
        <div>
          Species: <span className="italic font-normal">{species}</span>
        </div>
        <div>
          Type: <span className="italic font-normal">{type || "N/A"}</span>
        </div>
        <div>
          Location:
          <span className="italic font-normal">{location.name}</span>
        </div>
        <div>
          Origin: <span className="italic font-normal">{origin.name}</span>
        </div>
        <span>
          <button onClick={onFollow} disabled={isFollowed} className={`flex px-1 rounded ${isFollowed ? "bg-gray-500" : "bg-indigo-600"}`}>
            Follow
          </button>
        </span>
      </div>
    </div>
  );
};
