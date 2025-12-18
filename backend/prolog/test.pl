% recommend.pl
:- use_module(library(http/json)).
:- use_module(library(http/http_json)).  % NECESARIO para reply_json_dict/1
:- use_module(library(apply)).
:- set_prolog_flag(double_quotes, chars).

/* -----------------------
   BASE DE CONOCIMIENTO
   ----------------------- */

coffee(espresso, [
  id=espresso,
  name="Espresso",
  category(hot),
  strength(strong),
  season_type(regular),
  milk(no_milk),
  creamy(no_creamy),
  foam_level(foam_light),
  flavors(no_flavors),
  shots(one_shot),
  sweetness(no_sugar),
  brew_method(espresso),
  body_level(full_body),
  acidity_level(medium_acidity),
  aftertaste(aftertaste_clean),
  complexity(simple),
  experiment_level(traditional),
  caffeine_level(high_caffeine)
]).

coffee(americano, [
  id=americano,
  name="Americano",
  category(hot),
  strength(medium),
  season_type(regular),
  milk(no_milk),
  creamy(no_creamy),
  foam_level(no_foam),
  flavors(no_flavors),
  shots(one_shot),
  sweetness(no_sugar),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(medium_acidity),
  aftertaste(aftertaste_clean),
  complexity(simple),
  experiment_level(traditional),
  caffeine_level(high_caffeine)
]).

coffee(latte, [
  id=latte,
  name="Latte",
  category(hot),
  strength(mild),
  season_type(regular),
  milk(milk),
  creamy(very_creamy),
  foam_level(foam_light),
  flavors(no_flavors),
  shots(one_shot),
  sweetness(no_sugar),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(traditional),
  caffeine_level(normal_caffeine)
]).

coffee(cappuccino, [
  id=cappuccino,
  name="Cappuccino",
  category(hot),
  strength(medium),
  season_type(regular),
  milk(milk),
  creamy(normal_creamy),
  foam_level(foam_high),
  flavors(no_flavors),
  shots(one_shot),
  sweetness(no_sugar),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(traditional),
  caffeine_level(normal_caffeine)
]).

coffee(mocha, [
  id=mocha,
  name="Mocha",
  category(hot),
  strength(mild),
  season_type(regular),
  milk(milk),
  creamy(very_creamy),
  foam_level(foam_light),
  flavors(chocolate),
  shots(one_shot),
  sweetness(sweet),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(traditional),
  caffeine_level(normal_caffeine)
]).

coffee(flatwhite, [
  id=flatwhite,
  name="Flat White",
  category(hot),
  strength(medium),
  season_type(regular),
  milk(milk),
  creamy(normal_creamy),
  foam_level(foam_light),
  flavors(no_flavors),
  shots(two_shots),
  sweetness(no_sugar),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(traditional),
  caffeine_level(high_caffeine)
]).

coffee(macchiato, [
  id=macchiato,
  name="Macchiato",
  category(hot),
  strength(strong),
  season_type(regular),
  milk(milk),
  creamy(normal_creamy),
  foam_level(foam_light),
  flavors(no_flavors),
  shots(one_shot),
  sweetness(no_sugar),
  brew_method(espresso),
  body_level(full_body),
  acidity_level(medium_acidity),
  aftertaste(aftertaste_clean),
  complexity(simple),
  experiment_level(traditional),
  caffeine_level(high_caffeine)
]).

coffee(iced_latte, [
  id=iced_latte,
  name="Iced Latte",
  category(cold),
  strength(mild),
  season_type(regular),
  milk(milk),
  creamy(normal_creamy),
  foam_level(no_foam),
  flavors(no_flavors),
  shots(one_shot),
  sweetness(no_sugar),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(traditional),
  caffeine_level(normal_caffeine)
]).

coffee(iced_americano, [
  id=iced_americano,
  name="Iced Americano",
  category(cold),
  strength(medium),
  season_type(regular),
  milk(no_milk),
  creamy(no_creamy),
  foam_level(no_foam),
  flavors(no_flavors),
  shots(one_shot),
  sweetness(no_sugar),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(medium_acidity),
  aftertaste(aftertaste_clean),
  complexity(simple),
  experiment_level(traditional),
  caffeine_level(high_caffeine)
]).

coffee(cold_brew, [
  id=cold_brew,
  name="Cold Brew",
  category(cold),
  strength(strong),
  season_type(regular),
  milk(no_milk),
  creamy(no_creamy),
  foam_level(no_foam),
  flavors(no_flavors),
  shots(zero),
  sweetness(no_sugar),
  brew_method(cold_brew),
  body_level(full_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_clean),
  complexity(simple),
  experiment_level(traditional),
  caffeine_level(high_caffeine)
]).

coffee(nitro_cold_brew, [
  id=nitro_cold_brew,
  name="Nitro Cold Brew",
  category(cold),
  strength(strong),
  season_type(regular),
  milk(no_milk),
  creamy(very_creamy),
  foam_level(no_foam),
  flavors(no_flavors),
  shots(zero),
  sweetness(no_sugar),
  brew_method(cold_brew),
  body_level(full_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_clean),
  complexity(simple),
  experiment_level(intermediate),
  caffeine_level(high_caffeine)
]).

coffee(frappuccino_mocha, [
  id=frappuccino_mocha,
  name="Mocha Frappuccino",
  category(frappuccino),
  strength(mild),
  season_type(regular),
  milk(milk),
  creamy(very_creamy),
  foam_level(no_foam),
  flavors(chocolate),
  shots(zero),
  sweetness(sweet),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(experimental),
  caffeine_level(normal_caffeine)
]).

coffee(frappuccino_caramel, [
  id=frappuccino_caramel,
  name="Caramel Frappuccino",
  category(frappuccino),
  strength(mild),
  season_type(regular),
  milk(milk),
  creamy(very_creamy),
  foam_level(no_foam),
  flavors(caramel),
  shots(zero),
  sweetness(sweet),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(experimental),
  caffeine_level(normal_caffeine)
]).

coffee(frappuccino_java_chip, [
  id=frappuccino_java_chip,
  name="Java Chip Frappuccino",
  category(frappuccino),
  strength(medium),
  season_type(regular),
  milk(milk),
  creamy(very_creamy),
  foam_level(no_foam),
  flavors(chocolate),
  shots(zero),
  sweetness(sweet),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(experimental),
  caffeine_level(normal_caffeine)
]).

coffee(matcha_latte, [
  id=matcha_latte,
  name="Matcha Latte",
  category(other),
  strength(mild),
  season_type(regular),
  milk(milk),
  creamy(normal_creamy),
  foam_level(foam_light),
  flavors(no_flavors),
  extra(matcha),
  shots(zero),
  sweetness(no_sugar),
  brew_method(other),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(intermediate),
  caffeine_level(light_caffeine)
]).

coffee(chai_latte, [
  id=chai_latte,
  name="Chai Latte",
  category(other),
  strength(mild),
  season_type(regular),
  milk(milk),
  creamy(normal_creamy),
  foam_level(foam_light),
  flavors(no_flavors),
  extra(chai),
  shots(zero),
  sweetness(light_sweet),
  brew_method(other),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(intermediate),
  caffeine_level(normal_caffeine)
]).

coffee(pumpkin_spice_latte, [
  id=pumpkin_spice_latte,
  name="Pumpkin Spice Latte",
  category(seasonal),
  strength(mild),
  season_type(seasonal),
  milk(milk),
  creamy(very_creamy),
  foam_level(foam_light),
  flavors(no_flavors),
  extra(pumpkin),
  shots(one_shot),
  sweetness(sweet),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(experimental),
  caffeine_level(normal_caffeine)
]).

coffee(peppermint_mocha, [
  id=peppermint_mocha,
  name="Peppermint Mocha",
  category(seasonal),
  strength(mild),
  season_type(seasonal),
  milk(milk),
  creamy(very_creamy),
  foam_level(foam_light),
  flavors(chocolate),
  extra(mint),
  shots(one_shot),
  sweetness(sweet),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(experimental),
  caffeine_level(normal_caffeine)
]).

coffee(gingerbread_latte, [
  id=gingerbread_latte,
  name="Gingerbread Latte",
  category(seasonal),
  strength(mild),
  season_type(seasonal),
  milk(milk),
  creamy(very_creamy),
  foam_level(foam_light),
  flavors(no_flavors),
  extra(gingerbread),
  shots(one_shot),
  sweetness(light_sweet),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(experimental),
  caffeine_level(normal_caffeine)
]).

coffee(sakura_latte, [
  id=sakura_latte,
  name="Sakura Latte",
  category(seasonal),
  strength(mild),
  season_type(seasonal),
  milk(milk),
  creamy(normal_creamy),
  foam_level(foam_light),
  flavors(no_flavors),
  extra(sakura),
  shots(one_shot),
  sweetness(no_sugar),
  brew_method(espresso),
  body_level(medium_body),
  acidity_level(low_acidity),
  aftertaste(aftertaste_sweet),
  complexity(simple),
  experiment_level(experimental),
  caffeine_level(normal_caffeine)
]).

/* ============================================================
 – HELPERS
============================================================ */

pairs_values([], []).
pairs_values([_-V|T], [V|Vs]) :-
    pairs_values(T, Vs).

take(_, [], []) :- !.
take(0, _, []) :- !.
take(N, [H|T], [H|R]) :-
    N > 0,
    N1 is N - 1,
    take(N1, T, R).

/* ============================================================
   STRING → KEY=VALUE  
============================================================ */

parse_predicates([], []).
parse_predicates([S|Ss], [Key=Val|Out]) :-
    string_to_atom(S, Atom),
    parse_predicate_atom(Atom, Key, Val),
    parse_predicates(Ss, Out).

string_to_atom(S, A) :- atom_chars(A, Cs), string_chars(S, Cs).


/* ----- Parser manual: "strength(mild)" ----- */

parse_predicate_atom(Atom, Key, Val) :-
    atom_chars(Atom, Chars),
    split_at_paren(Chars, KeyChars, ValChars),
    atom_chars(Key, KeyChars),
    atom_chars(ValAtom, ValChars),
    atom_to_val(ValAtom, Val).

split_at_paren(Chars, Key, Val) :-
    append(Key, ['('|Rest], Chars),
    append(Val, [')'], Rest).

atom_to_val(A, V) :-
    atom_number(A, Num), !,
    V = Num.
atom_to_val(A, A).


/* ============================================================
   MATCH y SCORE 
============================================================ */

match_one(Attrs, Key=Val) :-
    member(Attr, Attrs),
    Attr =.. [KeyFound, ValFound],
    KeyFound == Key,
    ValFound == Val.

score_attributes(Attrs, Preds, Score) :-
    findall(P, (member(P, Preds), match_one(Attrs, P)), Matches),
    length(Matches, Score).

/* ============================================================
   JSON – imprimir salida
============================================================ */

print_json(Dict) :-
    atom_json_dict(JSON, Dict, []),
    writeln(JSON).

/* ============================================================
   MAIN
============================================================ */

main :-
    catch(read_string(user_input, _, JSONString),
          _, (print_json(_{recommendations: []}), !)),

    (JSONString = "" ->
        print_json(_{recommendations: []}), !
    ; true),

    catch(atom_json_dict(JSONString, Dict, []),
          _, (print_json(_{recommendations: []}), !)),

    PredsRaw = Dict.get(predicates, []),
    (PredsRaw == [] ->
        print_json(_{recommendations: []}), !
    ; true),

    parse_predicates(PredsRaw, Preds),

    /* Calcular scores */
    findall(Score-Id, (
        coffee(Id, Attrs),
        score_attributes(Attrs, Preds, Score),
        Score > 0
    ), Pairs),

    sort(0, @>=, Pairs, SortedPairs),

    take(5, SortedPairs, TopPairs),
    findall(Id, member(_-Id, TopPairs), TopIds),

    findall(_{id:Id, name:Name, score:OutScore}, (
        member(Id, TopIds),
        coffee(Id, AttrsX),
        member(name=Name, AttrsX),
        score_attributes(AttrsX, Preds, OutScore)
    ), OutList),

    print_json(_{recommendations: OutList}).
