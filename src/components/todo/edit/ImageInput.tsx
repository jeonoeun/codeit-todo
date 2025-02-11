import Image from "next/image";
import { uploadImage } from "@/apis/imageApi";
import Button from "@/components/common/Button";
import plus_variant from "../../../../public/icons/plus_variant.svg";
import edit from "../../../../public/icons/edit.svg";
import img from "../../../../public/images/img.svg";

interface ImageInputProps {
  imageUrl: string;
  setImageUrl: (url: string) => void;
}

const ImageInput = ({ imageUrl, setImageUrl }: ImageInputProps) => {
  // 이미지 파일 선택 시 호출되는 핸들러
  const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일명은 영어만 허용
    const isEnglishFileName = /^[a-zA-Z0-9._-]+$/.test(file.name.split(".")[0]);
    if (!isEnglishFileName) {
      alert("👀 파일명은 영어로만 이루어져야 해요.");
      return;
    }

    // 파일 크기 제한 (최대 5MB)
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
      setImageUrl(uploadedUrl); // 업로드된 이미지 URL 저장
    } catch (error) {
      console.error("❌ 이미지 업로드 중 오류 발생:", error);
      alert("이미지 업로드 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <div className="relative w-full desktop:max-w-[384px] h-[311px] rounded-[24px] overflow-hidden">
      {/* 업로드된 이미지가 있으면 미리보기 */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="선택한 이미지"
          fill
          className="object-cover"
        />
      ) : (
        // 이미지가 없을 경우 기본 이미지
        <div className="flex items-center justify-center bg-slate-50 border-2 border-dashed border-slate-300 rounded-[24px] h-full">
          <Image src={img} alt="이미지 없음" />
        </div>
      )}

      {/* 이미지 추가/수정 버튼 */}
      <label htmlFor="file" className="absolute bottom-[16px] right-[16px]">
        <Button
          type="button"
          shape="circle"
          icon={imageUrl ? edit : plus_variant}
          variant={imageUrl ? "dark" : "slate"}
          border={Boolean(imageUrl)}
          onClick={() => document.getElementById("file")?.click()} // 버튼 클릭 시 파일 입력 창 열기
        />
      </label>

      {/* 파일 업로드 input (숨김 처리) */}
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

export default ImageInput;
