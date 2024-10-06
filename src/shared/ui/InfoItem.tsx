import React from "react";

type InfoItemProps = {
  label: string;
  value: string;
};

export const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between py-1">
      <span className="font-semibold">{label}:</span>
      <span>{value}</span>
    </div>
  );
};

