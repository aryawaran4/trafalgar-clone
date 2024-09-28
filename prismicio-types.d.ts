// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type TopTourSummaryDocumentDataSlicesSlice = TopTourSummarySlice;

/**
 * Content for Your Itinerary documents
 */
interface TopTourSummaryDocumentData {
  /**
   * Slice Zone field in *Your Itinerary*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TopTourSummaryDocumentDataSlicesSlice> /**
   * Meta Title field in *Your Itinerary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: top_tour_summary.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Your Itinerary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: top_tour_summary.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Your Itinerary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Your Itinerary document from Prismic
 *
 * - **API ID**: `top_tour_summary`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TopTourSummaryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TopTourSummaryDocumentData>,
    "top_tour_summary",
    Lang
  >;

export type AllDocumentTypes = TopTourSummaryDocument;

/**
 * Default variation for TopTourSummary Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopTourSummarySliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Primary content in *TopTourSummary → hero-banner-wrapper → Primary*
 */
export interface TopTourSummarySliceSection2WrapperPrimary {
  /**
   * trip img field in *TopTourSummary → hero-banner-wrapper → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: top_tour_summary.section2Wrapper.primary.trip_img
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  trip_img: prismic.ImageField<never>;
}

/**
 * hero-banner-wrapper variation for TopTourSummary Slice
 *
 * - **API ID**: `section2Wrapper`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopTourSummarySliceSection2Wrapper = prismic.SharedSliceVariation<
  "section2Wrapper",
  Simplify<TopTourSummarySliceSection2WrapperPrimary>,
  never
>;

/**
 * Slice variation for *TopTourSummary*
 */
type TopTourSummarySliceVariation =
  | TopTourSummarySliceDefault
  | TopTourSummarySliceSection2Wrapper;

/**
 * TopTourSummary Shared Slice
 *
 * - **API ID**: `top_tour_summary`
 * - **Description**: TopTourSummary
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TopTourSummarySlice = prismic.SharedSlice<
  "top_tour_summary",
  TopTourSummarySliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      TopTourSummaryDocument,
      TopTourSummaryDocumentData,
      TopTourSummaryDocumentDataSlicesSlice,
      AllDocumentTypes,
      TopTourSummarySlice,
      TopTourSummarySliceSection2WrapperPrimary,
      TopTourSummarySliceVariation,
      TopTourSummarySliceDefault,
      TopTourSummarySliceSection2Wrapper,
    };
  }
}
