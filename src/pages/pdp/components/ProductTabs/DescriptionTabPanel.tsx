import { COLORS } from "@/constants/colors";
import { S } from "../ProductDetails.styles";

export default function DescriptionTabPanel() {
  return (
    <S.DescriptionTab>
      <S.DescriptionBlock>
        <p className="subtitle-2">Various Tempor</p>
        <p style={{ color: COLORS.grey3 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam
          dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
          consectetur. Pellentesque diam dolor, tincidunt nec ante congue,
          tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis
          ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec
          ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula
          nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis
          nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus,
          congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus
        </p>
      </S.DescriptionBlock>
      <S.DescriptionBlock>
        <p className="subtitle-2">More details</p>
        <S.DescriptionList>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
            consectetur.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
            consectetur.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
            consectetur.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac
            quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero
            consectetur.
          </li>
        </S.DescriptionList>
      </S.DescriptionBlock>
    </S.DescriptionTab>
  );
}
