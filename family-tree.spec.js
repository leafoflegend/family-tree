const FamilyTree = require('./family-tree');
// Comment above, and uncomment below for proven solution.
// const FamilyTree = require('./solution');

describe('Family Tree', () => {
  describe('Initializes', () => {
    test('It takes a value in the constructor and stores it.', () => {
      const szwajkowskis = new FamilyTree('Pop');

      expect(szwajkowskis.value).toEqual('Pop');
    });

    test('If not given a value, the family tree errors.', () => {
      expect(() => {
        // @ts-ignore
        return new FamilyTree();
      }).toThrow();
    });

    test('If given anything thats not a string, the family tree errors.', () => {
      expect(() => {
        // @ts-ignore
        return new FamilyTree(7);
      }).toThrow();
    });
  });

  test('Has an insert method.', () => {
    const szwajkowskis = new FamilyTree('Pop');

    expect(typeof szwajkowskis.insert).toEqual('function');
  });

  describe('Insert', () => {
    test('If nothing has been inserted, its children are empty.', () => {
      const szwajkowskis = new FamilyTree('Pop');

      expect(szwajkowskis.children.length).toEqual(0);
    });

    test('If a child is inserted, it accordingly has updated children.', () => {
      const szwajkowskis = new FamilyTree('Pop');
      szwajkowskis.insert('Mike');

      expect(szwajkowskis.children.length).toEqual(1);
    });

    test('Inserting a second child puts it on the same level as the first child.', () => {
      const szwajkowskis = new FamilyTree('Pop');
      szwajkowskis.insert('Mike');
      szwajkowskis.insert('Amy');

      expect(szwajkowskis.children.length).toEqual(2);
    });

    test('Inserted children are a FamilyTree', () => {
      const szwajkowskis = new FamilyTree('Pop');
      szwajkowskis.insert('Mike');

      expect(szwajkowskis.children[0] instanceof FamilyTree).toEqual(true);
    });
  });

  test('Has a familySize method.', () => {
    const szwajkowskis = new FamilyTree('Pop');

    expect(typeof szwajkowskis.familySize).toEqual('function');
  });

  describe('Family Size', () => {
    test('Reports a lone node as a size of 1.', () => {
      const szwajkowskis = new FamilyTree('Pop');

      expect(szwajkowskis.familySize()).toEqual(1);
    });

    test('Reports a families size correctly.', () => {
      const szwajkowskis = new FamilyTree('Pop');
      szwajkowskis.insert('Mike');
      szwajkowskis.insert('Amy');

      expect(szwajkowskis.familySize()).toEqual(3);
    });

    test('Does not include grandchildren.', () => {
      const szwajkowskis = new FamilyTree('Pop');
      szwajkowskis.insert('Mike');
      szwajkowskis.insert('Amy');

      const mike = szwajkowskis.children[0];

      mike.insert('Cas');

      expect(szwajkowskis.familySize()).toEqual(3);
    });
  });

  test('Has a findMember method.', () => {
    const szwajkowskis = new FamilyTree('Pop');

    expect(typeof szwajkowskis.findMember).toEqual('function');
  });

  describe('Find Member', () => {
    test('If a member doesnt exist, returns undefined.', () => {
      const szwajkowskis = new FamilyTree('Pop');

      expect(szwajkowskis.findMember('Bob'));
    });

    test('If a member does exist, returns that members node.', () => {
      const szwajkowskis = new FamilyTree('Pop');
      szwajkowskis.insert('Mike');
      const mikeNode = szwajkowskis.findMember('Mike');

      expect(mikeNode instanceof FamilyTree).toEqual(true);
    });

    test('Can find grandchild', () => {
      const grandpa = new FamilyTree('Pop');
      grandpa.insert('Mike');
      const firstson = grandpa.findMember('Mike');
      firstson.insert('Eliot');
      firstson.insert('Elise');
      firstson.insert('Cas');

      const result = grandpa.findMember('Cas');

      expect(result instanceof FamilyTree).toEqual(true);
      expect(result.value).toEqual('Cas');
    });

    test('Can find great grandchild', () => {
      const grandpa = new FamilyTree('Pop');
      grandpa.insert('Mike');
      const mike = grandpa.findMember('Mike');
      mike.insert('Eliot');
      const grandson = grandpa.findMember('Eliot');
      grandson.insert('Mary');
      grandson.insert('Nathan');
      
      const result = grandpa.findMember('Nathan');

      expect(result instanceof FamilyTree).toEqual(true);
      expect(result.value).toEqual('Nathan');
    });

  });

  test('Has a log method.', () => {
    const szwajkowskis = new FamilyTree('Pop');

    expect(typeof szwajkowskis.log).toEqual('function');
  });

  describe('Log', () => {
    test('Accurately generates a log for one member.', () => {
      const szwajkowskis = new FamilyTree('Pop');

      expect(szwajkowskis.log().indexOf('-- Pop')).toEqual(0);
    });

    test('Accurately generates a log for many members.', () => {
      const szwajkowskis = new FamilyTree('Pop');

      szwajkowskis.insert('Mike');
      szwajkowskis.insert('Amy');
      szwajkowskis.insert('Todd');

      const mikesFamily = szwajkowskis.findMember('Mike');

      mikesFamily.insert('Eliot');
      mikesFamily.insert('Elise');
      mikesFamily.insert('Cas');
      mikesFamily.insert('George');
      mikesFamily.insert('Lear');

      const amysFamily = szwajkowskis.findMember('Amy');

      amysFamily.insert('Henry');
      amysFamily.insert('Vivian');

      const log = szwajkowskis.log();

      expect(
        log.indexOf(
          `-- Pop
---- Mike
------ Eliot
------ Elise
------ Cas
------ George
------ Lear
---- Amy
------ Henry
------ Vivian
---- Todd`,
        ),
      ).toEqual(0);
    });
  });
});
