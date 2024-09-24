import {Link} from "react-router-dom";

const testImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOHBlPRhPQBXxSSv0qkEAvCAt6dpdTBpCIQ&s"

function PreviewRecipe() {
  return (
      <Link to={""} className={"flex-1 flex flex-col"}>
        <img className={"h-full object-cover aspect-square rounded-xl"} src={testImageSrc} alt=""/>
        <div className={"flex-col"}>
          <h2 className={"text-lg font-bold -mb-2"}>카카오 무쌉</h2>
          <span className={"py-1 line-clamp-1"}>태국식 돼지고기 덮밥, 우리나라에서도 현지의 그 맛을 느껴볼 수 있어요!</span>
        </div>
      </Link>
  )
}

export default PreviewRecipe;