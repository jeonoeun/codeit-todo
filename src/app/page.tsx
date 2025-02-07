import Button from "@/components/common/Button";
import plus_black from "../../public/icons/plus_black.svg";
import plus from "../../public/icons/plus.svg";
import x from "../../public/icons/X.svg";
import check from "../../public/icons/check.svg";
import edit from "../../public/icons/edit.svg";
import plus_variant from "../../public/icons/plus_variant.svg";

export default function Home() {
  return (
    <div>
      <Button
        type="submit"
        text="추가하기"
        icon={plus_black}
        variant="slate"
        border
      />
      <Button
        type="submit"
        text="추가하기"
        icon={plus}
        variant="violet"
        border
      />

      <Button
        type="submit"
        text="삭제하기"
        icon={x}
        variant="rose"
        border
      />
      <Button
        type="submit"
        text="수정 완료"
        icon={check}
        variant="slate"
        border
      />
      <Button
        type="submit"
        text="수정 완료"
        icon={check}
        variant="lime"
        border
      />
      <Button
        type="button"
        icon={plus_variant}
        variant="slate"
      />
      <Button
        type="button"
        icon={edit}
        variant="dark"
        border
      />
    </div>
  );
}
