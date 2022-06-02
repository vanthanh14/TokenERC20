const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ThanhToken Unit Test", function () {
  let totalSupply = '100000000';
  let Token;
  let hardhatToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    Token = await ethers.getContractFactory("ThanhToken");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    hardhatToken = await Token.deploy(totalSupply);
  });

  describe("Testcase for Deployment", function () {
    it("Should assign the total supply to the owner", async function () {
        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Testcase for Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      
      //transfer 50 tokens from owner to addr1
      await hardhatToken.transfer(addr1.address, 50);
      const addr1Balance = await hardhatToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);  

      // Transfer 50 tokens from addr1 to addr2
      await hardhatToken.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await hardhatToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });

    // it ("Can not transfer above the amount", async function() {
    //   await expect(hardhatToken.transfer
    // });
    
    // it("Shout let you give another address the approval to send on the behalf", async function () {
    //   await hardhatToken.connect(addr1).approve(owner.address, ethers.utils.parseEther("10"));
    //   await hardhatToken.transfer(addr1.address, ethers.utils.parseEther("10"));
    //   await hardhatToken.transferFrom(addr1.address, addr2.address, ethers.utils.parseEther("10"));
    // expect(await hardhatToken.balanceOf(addr2.address)).to.equal(ethers.utils.parseEther("10"));
    // });

    // it("Should fail if sender doesn’t have enough tokens", async function () {
    //   const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

    //   // Try to send 1 token from addr1 (0 tokens) to owner (1000000 tokens).
    //   // `require` will evaluate false and revert the transaction.
    //   await expect(
    //     hardhatToken.connect(addr1).transfer(owner.address, 1)
    //   ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

    //   // Owner balance shouldn't have changed.
    //   expect(await hardhatToken.balanceOf(owner.address)).to.equal(
    //     initialOwnerBalance
    //   );
    // });

  });

});
