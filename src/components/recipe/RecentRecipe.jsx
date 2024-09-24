import {Link} from "react-router-dom";

const testImageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOHBlPRhPQBXxSSv0qkEAvCAt6dpdTBpCIQ&s"

function RecentRecipe()  {
  return (
      <Link className={"w-full h-44 flex gap-4"}>
        <img className={"h-full object-cover aspect-square rounded-xl"} src={testImageSrc} alt=""/>
        <div className={"w-full flex flex-col"}>
          <h2 className={"text-2xl font-bold"}>카카오 무쌉</h2>
          <span>태국식 돼지고기 덮밥, 우리나라에서도 현지의 그 맛을 느껴볼 수 있어요!</span>
        </div>
      </Link>
  )
}

export default RecentRecipe;