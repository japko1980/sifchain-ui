import { formatAssetAmount } from "@/componentsLegacy/shared/utils";
import { TokenListItem } from "@/hooks/useToken";

export type TokenSortBy = "balance" | "symbol";

export function sortAndFilterTokens(props: {
  tokens: TokenListItem[];
  searchQuery?: string;
  sortBy?: TokenSortBy;
  reverse?: boolean;
}) {
  props.sortBy = props.sortBy || "symbol";
  props.searchQuery = props.searchQuery || "";

  const rowanRegex = /^.?rowan/i;

  const array = props.tokens
    .filter((token) => {
      if (!props.searchQuery) return true;
      return (
        token.asset.displaySymbol
          .toLowerCase()
          .indexOf(props.searchQuery.toLowerCase()) !== -1 ||
        token.asset.label
          .toLowerCase()
          .indexOf(props.searchQuery.toLowerCase()) !== -1
      );
    })
    .sort((a: TokenListItem, b: TokenListItem) => {
      if (props.sortBy === "balance") {
        // Balance: descending
        return (
          parseFloat(formatAssetAmount(b.amount)) -
          parseFloat(formatAssetAmount(a.amount))
        );
      } else {
        // Name: ascending, rowan first.
        if (rowanRegex.test(a.asset.symbol)) return -1;
        if (rowanRegex.test(b.asset.symbol)) return 1;
        return a.asset.displaySymbol.localeCompare(b.asset.displaySymbol);
      }
    });

  if (props.reverse) array.reverse();

  return array;
}
