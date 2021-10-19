import { Chain, Network, IAssetAmount } from "../../entities";
import { urlJoin } from "url-join-ts";
import { BaseChain } from "./_BaseChain";

export class RegenChain extends BaseChain implements Chain {
  getBlockExplorerUrlForTxHash(hash: string) {
    return urlJoin(this.chainConfig.blockExplorerUrl, "txs", hash);
  }
}
