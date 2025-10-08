import { useState } from "react";
import { Box, Tab, Tabs, styled } from "@mui/material";
import { COLORS } from "@/constants/colors";
import CustomTabPanel from "./CustomTabPanel";
import DescriptionTabPanel from "./DescriptionTabPanel";
import AdditionalInfoTabPanel from "./AdditionalInfoTabPanel";
import ReviewsTabPanel from "./ReviewsTabPanel";
import VideoTabPanel from "./VideoTabPanel";

const tabConfig = [
  { label: "Description", Component: DescriptionTabPanel },
  { label: "Additional Info", Component: AdditionalInfoTabPanel },
  { label: "Reviews", Component: ReviewsTabPanel },
  { label: "Video", Component: VideoTabPanel },
];

function a11yProps(index: number) {
  return {
    id: `additional-tab-${index}`,
    "aria-controls": `additional-tabpanel-${index}`,
  };
}

const StyledTab = styled(Tab)({
  textTransform: "capitalize",
  "&.Mui-selected": {
    color: COLORS.black,
  },
});

export function ProductTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="additional information tabs"
          sx={{
            color: COLORS.black,
            "& .MuiTabs-indicator": { backgroundColor: COLORS.black },
          }}
        >
          {tabConfig.map((tab, index) => (
            <StyledTab
              key={tab.label}
              label={<span className="p-large">{tab.label}</span>}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>

      {tabConfig.map((tab, index) => (
        <CustomTabPanel key={tab.label} value={value} index={index}>
          <tab.Component />
        </CustomTabPanel>
      ))}
    </>
  );
}
