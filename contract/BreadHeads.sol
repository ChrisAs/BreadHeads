// SPDX-License-Identifier: MIT
// Created by: @Mercurial__me

pragma solidity ^0.8.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./ERC721BH.sol";

contract BreadHeads is ERC721BH, ReentrancyGuard {

  using Strings for uint256;
  string public provenanceHash;
  string private _baseTokenURI;

  // Sale Params
  uint256 public cost = 0.06 ether;
  uint256 public tokensMaxPerWallet = 5; // Presale
  uint256 public tokensMaxPerTx = 15; // Public sale
  uint256 public tokensReserved = 500;
  uint256 public tokensMaxSupply = 10000;
  bool public isPublicSaleActive = false;
  bool public isPresaleActive = false;

  constructor() ERC721BH("Bread Heads", "BH") {}

  function presaleMint(uint256 quantity, bytes32 _r, bytes32 _s, uint8 _v) external payable nonReentrant onlyValidAccess(_r, _s, _v) {
    require(isPresaleActive, "PRESALE NOT ACTIVE");
    require(quantity + numberMinted(msg.sender) <= tokensMaxPerWallet, "EXCEEDING MAX TOKENS PER WALLET");
    require(totalSupply() + quantity + tokensReserved <= tokensMaxSupply, "EXCEEDING MAX SUPPLY");
    require(msg.value >= cost * quantity, "INSUFFICIENT ETH");
    _safeMint(msg.sender, quantity, "");
  }

  function publicSaleMint(uint256 quantity) external payable callerIsUser nonReentrant {
    require(isPublicSaleActive, "PUBLIC SALE NOT ACTIVE");
    require(quantity <= tokensMaxPerTx, "EXCEEDING MINT LIMIT OF 15/TXN");
    require(totalSupply() + quantity + tokensReserved <= tokensMaxSupply, "EXCEEDING MAX SUPPLY");
    require(msg.value >= cost * quantity, "INSUFFICIENT ETH");
    _safeMint(msg.sender, quantity, "");
  }

  function giftBreadhead(address[] calldata recipient, uint[] calldata quantity) external onlyOwner{
    require(recipient.length == quantity.length, "RECIPIENT AND QUANTITY NOT EQUAL LENGTH");
    uint256 totalQuantity = 0;
    for(uint256 i; i < quantity.length; i++){
      totalQuantity += quantity[i];
    }
    require(totalQuantity <= tokensReserved, "EXCEEDING REMAINING RESERVED SUPPLY");
    require(totalQuantity + totalSupply()  <= tokensMaxSupply, "EXCEEDING MAX SUPPLY");
    for(uint256 i; i < recipient.length; i++){
      tokensReserved -= quantity[i];
      _safeMint(recipient[i], quantity[i], "");
    }
  }

  // Withdrawal functions
  function withdraw() external onlyOwner {
    uint256 sendAmount = address(this).balance;
    bool success;

    address w1 = payable(0x1e16870873b28d956f8EBCb5179E518f8A9f89B5);
    address w2 = payable(0x1435Db7390300EB252C806df378ecC882c041641);
    address w3 = payable(0x096a9d16AFFD7fB6b881dA383723bB10180Cc333);
    address dao = payable(0x14967Af4019989557489E2621b22C76d6404D2Cd);
    address treasury = payable(0x948181FA14E1a8D47e79e8b09632c274D3bD9386);

    (success, ) = w1.call{value: (sendAmount * 200/1000)}("");
    require(success, "Transaction Unsuccessful");

    (success, ) = w2.call{value: (sendAmount * 100/1000)}("");
    require(success, "Transaction Unsuccessful");

    (success, ) = w3.call{value: (sendAmount * 100/1000)}("");
    require(success, "Transaction Unsuccessful");

    (success, ) = dao.call{value: (sendAmount * 438/1000)}("");
    require(success, "Transaction Unsuccessful");

    (success, ) = treasury.call{value: (sendAmount * 162/1000)}("");
    require(success, "Transaction Unsuccessful");
  }

  function emergencyWithdraw() external onlyOwner {
    address w1 = payable(0x096a9d16AFFD7fB6b881dA383723bB10180Cc333);
    (bool success, ) = w1.call{value: address(this).balance}("");
    require(success, "Transaction Unsuccessful");
  }

  // Token URI
  function _baseURI() internal view virtual override returns (string memory) {
    return _baseTokenURI;
  }

  function setBaseURI(string calldata baseURI) external onlyOwner {
    _baseTokenURI = baseURI;
  }

  // Getters
  function numberMinted(address owner) public view returns (uint256) {
    return _numberMinted(owner);
  }
  
  function getOwnershipData(uint256 tokenId) external view returns (TokenOwnership memory) {
    return ownershipOf(tokenId);
  }

  // Setters
  function setprovenanceHash(string calldata _newHash) external onlyOwner {
    provenanceHash = _newHash;
  }
  
  function settokensReserved(uint256 _newMax) external onlyOwner {
    tokensReserved = _newMax;
  }

  function settokensMaxSupply(uint256 _newMax) external onlyOwner {
    tokensMaxSupply = _newMax;
  }

  function settokensMaxPerWallet(uint256 _newMax) external onlyOwner {
    tokensMaxPerWallet = _newMax;
  }

  function setPreSaleState(bool _newState) public onlyOwner {
    isPresaleActive = _newState;
  }

  function setPublicSaleStatus(bool _newState) public onlyOwner {
    isPublicSaleActive = _newState;
  }

  function setOwnersExplicit(uint256 quantity) external onlyOwner nonReentrant {
  _setOwnersExplicit(quantity);
  }

  receive() external payable {}
  fallback() external payable {}
}
