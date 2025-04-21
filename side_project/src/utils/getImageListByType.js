export const getImageListByType = (type) => {
  let modules;

  switch (type) {
    case "엔터테이먼트":
      modules = import.meta.glob("/src/assets/enter/*.{png,jpg,webp,svg}", {
        eager: true,
      });
      break;
    case "게임":
      modules = import.meta.glob("/src/assets/game/*.{png,jpg,webp,svg}", {
        eager: true,
      });
      break;
    case "금융":
      modules = import.meta.glob("/src/assets/fin/*.{png,jpg,webp,svg}", {
        eager: true,
      });
      break;
    case "잡동사니":
      modules = import.meta.glob("/src/assets/job/*.{png,jpg,webp,svg}", {
        eager: true,
      });
      break;
    case "여행":
      modules = import.meta.glob("/src/assets/travel/*.{png,jpg,webp,svg}", {
        eager: true,
      });
      break;
    default:
      modules = {};
  }

  return Object.values(modules).map((mod) => mod.default);
};
