import { Request, Response, Router } from "express";
import * as User from "../model/user";
import * as Post from "../model/post";

export class IndexRoute {

//------------------------- User Routes -------------------------

  public static create(router: Router) {
    router.post('/user/add', function(req, res) {
      var newUser = new User(req.body);
      newUser.save((err) => {
        if (err) {
          res.json({ info: 'Erro ao criar usuário', error: err });
        }
        res.json({ info: 'Usuário criado com sucesso', data: newUser });
      });
    });

    router.get('/user/list', function(req, res) {
      User.find((err, users) => {
        if (err) {
          res.json({ info: 'Erro ao listar usuários', error: err });
        };
        res.json({ info: 'Usuários listados com sucesso', data: users });
      });
    });

    router.post('/user/logon', function(req, res) {
      var email = req.body.email;
      var password = req.body.password;

      User.findOne(
        {
          email: email,
          password: password
        }, function(err, user) {
          if (err) {
            res.json({ info: 'Erro ao executar logon', error: err });
          };
          if (user) {
            res.json({ info: 'Usuário logado', data: user });
          } else {
            res.json({ info: 'Erro de logon' });
          }
        });
    });

    router.post('/user/update', function(req, res) {
      var newUser = new User(req.body);
      User.findOneAndUpdate(
        { _id: newUser._id }, newUser, function(err, user) {
          if (err) {
            res.json({ info: 'Erro ao atualizar usuário', error: err });
          }
          res.json({ info: 'Usuário atualizado com sucesso', data: newUser });
        });
    });

    router.post('/user/delete', function(req, res) {
      User.remove({_id: req.body._id}, function(err) {
            if (err) {
                res.json({ info: 'Erro ao remover usuário', error: err });
            }
            res.json({ info: 'Usuário removido com sucesso' });
        });
    });

//------------------------- Post Routes -------------------------

router.post('/post/add', function(req, res) {
  var newPost = new Post(req.body);
  newPost.save((err) => {
    if (err) {
      res.json({ info: 'Erro ao criar postagem', error: err });
    }
    res.json({ info: 'Postagem criada com sucesso', data: newPost });
  });
});

//------------------------- 404 -------------------------

    router.get('*', function(req, res) {
      res.send('<h1>Vá para casa, browser, você está bêbado</h1>');
    });
  }
}
