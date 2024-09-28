/**
 * @typedef {import("@prismicio/client").Content.TopTourSummarySlice} TopTourSummarySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopTourSummarySlice>} TopTourSummaryProps
 * @param {TopTourSummaryProps}
 */
const TopTourSummary = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for top_tour_summary (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TopTourSummary;
