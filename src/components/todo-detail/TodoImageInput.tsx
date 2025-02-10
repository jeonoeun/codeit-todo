import Image from "next/image";
import Button from "../common/Button";
import { uploadImage } from "@/apis/imageApi";
import plus_variant from "../../../public/icons/plus_variant.svg";
import edit from "../../../public/icons/edit.svg";
import img from "../../../public/images/img.svg";

interface TodoImageInputProps {
  todoImageUrl: string;
  setTodoImageUrl: (url: string) => void;
}

const TodoImageInput = ({
  todoImageUrl,
  setTodoImageUrl,
}: TodoImageInputProps) => {
  const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ✅ 파일명 영어 검사 (영어, 숫자, `_`, `-`, `.`만 허용)
    const isEnglishFileName = /^[a-zA-Z0-9._-]+$/.test(file.name.split(".")[0]);
    if (!isEnglishFileName) {
      alert("👀 파일명은 영어로만 이루어져야 해요.");
      return;
    }

    // ✅ 파일 크기 검사 (5MB 이하)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("🤔 파일 크기는 5MB 이하여야 해요.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await uploadImage(formData);
      const uploadedUrl = res.url;
      console.log(`✅ 이미지 업로드 완료: ${uploadedUrl}`);
      setTodoImageUrl(uploadedUrl);
    } catch (error) {
      console.error("❌ 이미지 업로드 중 오류 발생:", error);
      alert("이미지 업로드 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="relative w-full desktop:max-w-[384px] h-[311px] rounded-[24px] overflow-hidden">
      {todoImageUrl ? (
        <Image
          src={todoImageUrl}
          alt="선택한 이미지"
          fill
          className="object-cover"
        />
      ) : (
        <div className="flex items-center justify-center bg-slate-50 border-2 border-dashed border-slate-300 rounded-[24px] h-full">
          <Image src={img} alt="이미지 없음" />
        </div>
      )}

      <label htmlFor="file" className="absolute bottom-[16px] right-[16px]">
        <Button
          type="button"
          shape="circle"
          icon={todoImageUrl ? edit : plus_variant}
          variant={todoImageUrl ? "dark" : "slate"}
          border={Boolean(todoImageUrl)}
          onClick={() => document.getElementById("file")?.click()}
        />
      </label>

      <input
        id="file"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onChangeImage}
      />
    </div>
  );
};

export default TodoImageInput;
