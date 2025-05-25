export interface NormalValue {
  ko: string;
  cn: string;
}

export interface DetailValue {
  ko: string;
  cn: {
    title: string;
    content: string;
  };
}

export interface MultiValue {
  id: number;
  content: Array<NormalValue>;
}

export type RowType =
  | {
      type: "default";
      label: { cn: string; ko: string };
      values: NormalValue[];
    }
  | {
      type: "detail";
      label: { cn: string; ko: string };
      values: DetailValue[];
    }
  | {
      type: "multi";
      label: { cn: string; ko: string };
      values: MultiValue[];
    };

export const headersData: string[] = ["時", "日", "年", "月"];

export const rowsData: RowType[] = [
  {
    type: "default",
    label: { cn: "十星", ko: "십성" },
    values: [
      { ko: "비견", cn: "比肩" },
      { ko: "겁재", cn: "劫財" },
      { ko: "식신", cn: "食神" },
      { ko: "상관", cn: "傷官" },
    ],
  },
  {
    type: "detail",
    label: { cn: "天干", ko: "천간" },
    values: [
      { ko: "갑", cn: { title: "甲", content: "陰火" } },
      { ko: "을", cn: { title: "乙", content: "陽水" } },
      { ko: "병", cn: { title: "丙", content: "陽火" } },
      { ko: "정", cn: { title: "丁", content: "陽金" } },
    ],
  },
  {
    type: "detail",
    label: { cn: "지支", ko: "지지" },
    values: [
      { ko: "자", cn: { title: "子", content: "陽木" } },
      { ko: "축", cn: { title: "丑", content: "陽水" } },
      { ko: "인", cn: { title: "寅", content: "陽火" } },
      { ko: "묘", cn: { title: "卯", content: "陽木" } },
    ],
  },
  {
    type: "default",
    label: { cn: "十二運星", ko: "십이운성" },
    values: [
      { ko: "장생", cn: "長生" },
      { ko: "목욕", cn: "沐浴" },
      { ko: "관대", cn: "冠帶" },
      { ko: "건록", cn: "建祿" },
    ],
  },
  {
    type: "default",
    label: { cn: "十二神殺", ko: "십이신살" },
    values: [
      { ko: "월살", cn: "月煞" },
      { ko: "망신", cn: "亡神" },
      { ko: "장성", cn: "將星" },
      { ko: "반안", cn: "攀鞍" },
    ],
  },
  {
    type: "multi",
    label: { cn: "貴人", ko: "귀인" },
    values: [
      { id: 0, content: [{ ko: "없음", cn: "" }] },
      { id: 1, content: [{ ko: "없음", cn: "" }] },
      { id: 2, content: [{ ko: "천을귀인", cn: "天乙" }] },
      {
        id: 3,
        content: [
          { ko: "천신귀인", cn: "天辛" },
          { ko: "지해귀인", cn: "地亥" },
          { ko: "지축귀인", cn: "地丑" },
        ],
      },
    ],
  },
];
