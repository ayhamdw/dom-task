// 1. last element inside body
const lastt = document.body.lastElementChild;
console.log("last tag is", lastt.tagName);

// 2. how many elements in <main>
const maine = document.body.children[1];
console.log("main has", maine.children.length, "elements");

// 3. diff between childNodes and children
console.log("childNodes:", maine.childNodes.length);
console.log("children:", maine.children.length);
console.log("diff is", maine.childNodes.length - maine.children.length);

// 4. first thing in body
const firstThing = document.body.childNodes[0];
console.log("nodeType:", firstThing.nodeType);
console.log("nodeName:", firstThing.nodeName);

// 5. are paragraphs siblings?
const sect = maine.children[0];
const para1 = sect.children[0];
const para2 = sect.children[1];
console.log("are they siblings?", para1.nextElementSibling === para2);

// 6. find weird text nodes
sect.childNodes.forEach((n) => {
  if (n.nodeType === 3 && n.textContent.trim()) {
    console.log("text node:", n.textContent);
  }
});

// ---- Task 2 ----

// make div
const box = document.createElement("div");
box.classList.add("card");
box.dataset.role = "admin";

// make h2
const head = document.createElement("h2");
head.textContent = "Access Panel";

// make p
const msg = document.createElement("p");
msg.textContent = "Authenticated";

// put them together
box.appendChild(head);
box.appendChild(msg);

// drop it in body
document.body.appendChild(box);

// show data-role
console.log("role is", box.dataset.role);

// change p text
msg.innerText = "Welcome back, Admin";

// add more classes
box.classList.add("authenticated", "highlight");

// check and remove "card"
if (box.classList.contains("card")) {
  box.classList.remove("card");
}

// show final classes
console.log("classes now:", box.className);
