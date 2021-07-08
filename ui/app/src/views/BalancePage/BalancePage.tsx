import { defineComponent, TransitionGroup } from "vue";
import NavIconVue from "@/componentsLegacy/NavSidePanel/NavIcon.vue";
import AssetIconVue from "@/componentsLegacy/utilities/AssetIcon.vue";
import PageCard from "@/components/PageCard";
import BalanceRow from "./BalanceRow";
import { useBalancePageData } from "./useBalancePageData";
import { RouterView } from "vue-router";
import ImportModal from "./ImportModal/ImportModal";

export default defineComponent({
  name: "BalancePage",
  props: {},
  setup() {
    const { state, tokenList } = useBalancePageData({
      searchQuery: "",
      expandedSymbol: "",
      importAsset: undefined,
    });

    return () => (
      <>
        {!!state.importAsset && (
          <ImportModal
            onClose={() => (state.importAsset = undefined)}
            asset={state.importAsset}
          />
        )}
        <PageCard
          heading="Balances"
          iconName="navigation/balances"
          class="w-[800px]"
        >
          <div class="w-full bg-darkfill-input h-8 relative flex items-center rounded-lg overflow-hidden">
            <AssetIconVue icon="interactive/search" class="ml-3 w-4 h-4" />
            <input
              type="text"
              placeholder="Search Token..."
              value={state.searchQuery}
              onInput={(e: Event) => {
                state.searchQuery = (e.target as HTMLInputElement).value;
              }}
              class="box-border w-full absolute top-0 bottom-0 left-0 right-0 pl-8 pr-3 h-full bg-transparent outline-none text-white font-sans font-medium"
            />
          </div>
          <table class="w-full">
            <thead class="opacity-50">
              <tr>
                <td class="text-left">Token</td>
                <td class="text-right">Sifchain Balance</td>
                <td /> {/* Actions */}
              </tr>
            </thead>
            <tbody>
              {tokenList.value.map((item, index) => (
                <BalanceRow
                  last={index === tokenList.value.length - 1}
                  tokenItem={item}
                  expandedSymbol={state.expandedSymbol}
                  onAction={(type) => {
                    switch (type) {
                      case "import": {
                        state.importAsset = item.asset;
                      }
                      default:
                        console.log("action", type);
                    }
                  }}
                  onSetExpandedSymbol={(symbol) => {
                    state.expandedSymbol = symbol;
                  }}
                />
              ))}
            </tbody>
          </table>
        </PageCard>
      </>
    );
  },
});